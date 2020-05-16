import { Injectable } from '@angular/core';

import {Shop } from './shop';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  private shopsUrl = 'api/shops';  // URL to web api

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

    getShops (): Observable<Shop[]> {
      return this.http.get<Shop[]>(this.shopsUrl)
      .pipe(
        tap(_ => this.log('fetched shops')),
        catchError(this.handleError('getShops', []))
      );
    }

    /** GET hero by id. Will 404 if id not found */
/** GET hero by id. Will 404 if id not found */
getShop(id: number): Observable<Shop> {
  const url = `${this.shopsUrl}/${id}`;
  return this.http.get<Shop>(url).pipe(
    tap(_ => this.log(`fetched shop id=${id}`)),
    catchError(this.handleError<Shop>(`getShop id=${id}`))
  );
}

/** PUT: update the hero on the server */
updateShop (shop: Shop): Observable<any> {
  return this.http.put(this.shopsUrl, shop, httpOptions).pipe(
    tap(_ => this.log(`updated shop id=${shop.id}`)),
    catchError(this.handleError<any>('updateShop'))
  );
}

/** POST: add a new hero to the server */
addShop (shop: Shop): Observable<Shop> {
  return this.http.post<Shop>(this.shopsUrl, shop, httpOptions).pipe(
    tap((newShop: Shop) => this.log(`added shop w/ id=${newShop.id}`)),
    catchError(this.handleError<Shop>('addShop'))
  );
}

/** DELETE: delete the hero from the server */
deleteShop (shop: Shop | number): Observable<Shop> {
  const id = typeof shop === 'number' ? shop : shop.id;
  const url = `${this.shopsUrl}/${id}`;

  return this.http.delete<Shop>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted shop id=${id}`)),
    catchError(this.handleError<Shop>('deleteShop'))
  );
}

/* GET heroes whose name contains search term */
searchShops(term: string): Observable<Shop[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Shop[]>(`${this.shopsUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found shops matching "${term}"`)),
    catchError(this.handleError<Shop[]>('searchShops', []))
  );
}

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`ShopService: ${message}`);
    }
}
