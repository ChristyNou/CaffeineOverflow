import { Injectable } from '@angular/core';

import {Shop } from './shop';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/*const  params = new  HttpParams().set('start', "0").set('count', "50").set('status', 'ALL').set('sort', 'name|ASC').set('search','');
console.log(params.toString()); */



@Injectable({
  providedIn: 'root'
})

export class ShopService {

  private shopsUrl = 'http://localhost:3000/observatory/api/shops';

  
  //'api/shops';  //'http://localhost:3200/api/shops';
  
  //'api/shops';  // URL to web api

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

    
    getShops (count:number,start:number,status:String,sort:String,search:String): Observable<Shop[]> {
     // const queryParams =`?pagesize=${postsPerPage}&page=${currentpage}`;
    const  params = new  HttpParams().set('count', `${count}`).set('start', `${start}`)
    .set('status', `${status}`).set('sort', `${sort}`).set('search',`${search}`);;
      console.log(params.toString());
      return this.http.get<Shop[]>(this.shopsUrl,  {params}) 
      .pipe(
        tap(_ => this.log('fetched shops')),
        catchError(this.handleError('getShops', []))
      );
    }

    getShops2 (): Observable<Shop[]> {
       return this.http.get<Shop[]>(this.shopsUrl) 
       .pipe(
         tap(_ => this.log('fetched shops')),
         catchError(this.handleError('getShops', []))
       );
     }
 

    /** GET hero by id. Will 404 if id not found */
/** GET hero by id. Will 404 if id not found */
getShop(_id: string): Observable<Shop> {
  const url = `${this.shopsUrl}/${_id}`;
  return this.http.get<Shop>(url).pipe(
    tap(_ => this.log(`fetched shop id=${_id}`)),
    catchError(this.handleError<Shop>(`getShop id=${_id}`))
  );
}



/** PUT: update the hero on the server */
updateShop (shop: Shop): Observable<any> {
  return this.http.put(`http://localhost:3000/observatory/api/shops/${shop._id}`, {'name': shop.name,  'address' : shop.address,  
  'lng': shop.lng , 'lat': shop.lat, 'tags': shop.tags,'withdrawn' : shop.withdrawn }, httpOptions).pipe(
    tap(_ => this.log(`updated shop id=${shop._id}`)),
    catchError(this.handleError<any>('updateShop'))
  );
}

/** POST: add a new hero to the server */
addShop (shop: Shop): Observable<Shop> {
  return this.http.post<Shop>(this.shopsUrl, shop, httpOptions).pipe(
    tap((newShop: Shop) => this.log(`added shop w/ id=${newShop._id}`)),
    catchError(this.handleError<Shop>('addShop'))
  );
}

/** DELETE: delete the hero from the server */
deleteShop (shop: Shop | number): Observable<Shop> {
  const id = typeof shop === 'number' ? shop : shop._id;
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

create(shop:Shop):Observable<Shop>{
  return this.http.post<Shop>(this.shopsUrl,shop,httpOptions);
 /*pipe(
   tap((newShop: Shop) => this.log(`added shop w/ id=${newShop.id}`)),
    catchError(this.handleError<Shop>('create'))); 
*/
}

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`ShopService: ${message}`);
    }
}
