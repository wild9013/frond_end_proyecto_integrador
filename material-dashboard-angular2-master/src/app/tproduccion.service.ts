import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {TipoProduccion} from './tipoProduccion';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TproduccionService {

  private apiUrl = 'http://localhost:8080/tproducciones';  // URL REST API

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getTproducciones(): Observable<TipoProduccion[]> {
    return this.http.get<TipoProduccion[]>(this.apiUrl)
        .pipe(
            tap(_ => this.log('fetched tipoproducciones')),
            catchError(this.handleError<TipoProduccion[]>('getTproducciones', []))
        );
  }

  private log(message: string) {
    this.messageService.add(`TproduccionService: ${message}`);
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
