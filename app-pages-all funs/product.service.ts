import { Injectable } from '@angular/core';

import {Product } from './product';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})//, X-OBSERVATORY-AUTS: to token tou back })
                                           
};

@Injectable({
  providedIn: 'root'
}) 

//https://localhost:8765/Observatory/api/products

export class ProductService {

  private productsUrl = 'http://localhost:3000/Observatory/api/products';  // URL to web api

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

    getProducts (): Observable<Product[]> {
      return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(_ => this.log('fetched products')),
        catchError(this.handleError('getproducts', []))
      );
    }

    /** GET hero by id. Will 404 if id not found */
/** GET hero by id. Will 404 if id not found */
getProduct(id: number): Observable<Product> {
  const url = `${this.productsUrl}/${id}`;
  return this.http.get<Product>(url).pipe(
    tap(_ => this.log(`fetched product id=${id}`)),
    catchError(this.handleError<Product>(`getProduct id=${id}`))
  );
}

/** PUT: update the hero on the server */
updateProduct (product:Product): Observable<any> {
  return this.http.put(this.productsUrl, product, httpOptions).pipe(
    tap(_ => this.log(`updated product id=${product.id}`)),
    catchError(this.handleError<any>('updateProduct'))
  );
}

/** POST: add a new hero to the server */
addProduct (product: Product): Observable<Product> {
  return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
    tap((newProduct: Product) => this.log(`added product w/ id=${newProduct.id}`)),
    catchError(this.handleError<Product>('addProduct'))
  );
}

/** DELETE: delete the hero from the server */
deleteProduct (product: Product | number): Observable<Product> {
  const id = typeof product === 'number' ? product : product.id;
  const url = `${this.productsUrl}/${id}`;

  return this.http.delete<Product>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted product id=${id}`)),
    catchError(this.handleError<Product>('deleteProduct'))
  );
}

/* GET heroes whose name contains search term */
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

create(product:Product):Observable<Product>{
  return this.http.post<Product>(this.productsUrl,product,httpOptions);
 /*pipe(
   tap((newShop: Shop) => this.log(`added shop w/ id=${newShop.id}`)),
    catchError(this.handleError<Shop>('create'))); 
*/
}

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`ProductService: ${message}`);
    }
}
