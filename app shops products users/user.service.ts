import { Injectable } from '@angular/core';

import {User } from './user';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})//, X-OBSERVATORY-AUTS: to token tou back })
                                           
};


//https://localhost:8765/Observatory/api/products

const  params = new  HttpParams().set('status', 'ACTIVE').set('sort', 'name|ASC');
console.log(params.toString()); 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersUrl = 'http://localhost:3000/observatory/api/users';  // URL to web api

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    getUsers (): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl,{params})
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError('getusers', []))
      );
    }

    /** GET hero by id. Will 404 if id not found */
/** GET hero by id. Will 404 if id not found */
getUser(_id: string): Observable<User> {
  const url = `${this.usersUrl}/${_id}`;
  return this.http.get<User>(url).pipe(
    tap(_ => this.log(`fetched user id=${_id}`)),
    catchError(this.handleError<User>(`getUser id=${_id}`))
  );
}

/** PUT: update the hero on the server */
updateUser (user:User): Observable<any> {
  return this.http.put(`http://localhost:3000/observatory/api/users/${user._id}`,{'name':user.username, 
  'email': user.email, 'password':user.password, 'isActive':user.isActive,'isAdmin':user.isAdmin}, httpOptions).pipe(
    tap(_ => this.log(`updated user id=${user._id}`)),
    catchError(this.handleError<any>('updateUser'))
  );
}

/** POST: add a new hero to the server */


/* GET heroes whose name contains search term */
/*
searchProducts(term: string): Observable<Product[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found products matching "${term}"`)),
    catchError(this.handleError<Product[]>('searchProducts', []))
  );
}
 */

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`UserService: ${message}`);
    }
}
