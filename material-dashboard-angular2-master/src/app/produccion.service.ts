import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Produccion} from './produccion';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProduccionService {

  private apiUrl = 'http://localhost:8080/producciones';  // URL REST API

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  /** GET producciones from the server */
  getProducciones(pageIndex: number= 1, pageSize: number): Observable<Produccion[]> {
      return this.http.get<Produccion[]>(this.apiUrl + '/produccionesPagina', {
          params: new HttpParams()
              .set('pageIndex', pageIndex.toString())
              .set('pageSize', pageSize.toString())
          })
          .pipe(
              tap(_ => this.log('producciones pageSize:' + pageSize + ' pageIndex:' + pageIndex)),
              catchError(this.handleError<Produccion[]>('getProducciones', []))
          );
  }

  /** Log a ProduccionService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProduccionService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

}
