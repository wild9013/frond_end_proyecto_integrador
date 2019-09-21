import {BehaviorSubject, Observable, of} from 'rxjs';
import {ProduccionService} from './produccion.service';
import { CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Produccion} from './produccion';
import {catchError, finalize, tap} from 'rxjs/operators';

export class ProduccionDataSource extends DataSource<Produccion> {
    private _produccionesSubject = new BehaviorSubject<Produccion[]>([]);

    // to show the total number of records
    private countSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public counter$ = this.countSubject.asObservable();
    public loading$ = this.loadingSubject.asObservable();

    constructor(private produccionService: ProduccionService) {
        super();
    }

    loadProducciones(pageIndex: number, pageSize: number, sortActive: string, sortDirection: string, filter: string) {
        this.loadingSubject.next(true);
        if (filter === '*') {
            this.produccionService.getProduccionesPagina(pageIndex, pageSize, sortActive, sortDirection)
                .pipe(
                    catchError(() => of([])),
                    finalize(() => this.loadingSubject.next(false))
                )
                // subscribe method to receive Observable type data when it is ready
                .subscribe((result: any) => {
                        this._produccionesSubject.next(result.rows);
                        this.countSubject.next(result.total);
                    }
                );
        } else {
            if (sortActive === 'titulo') {
                this.produccionService.getProduccionesPaginaTitulo(pageIndex, pageSize, sortActive, sortDirection, filter)
                    .pipe(
                        catchError(() => of([])),
                        finalize(() => this.loadingSubject.next(false))
                    )
                    // subscribe method to receive Observable type data when it is ready
                    .subscribe((result: any) => {
                            this._produccionesSubject.next(result.rows);
                            this.countSubject.next(result.total);
                        }
                    );
            }
            if (sortActive === 'resumen') {
                this.produccionService.getProduccionesPaginaResumen(pageIndex, pageSize, sortActive, sortDirection, filter)
                    .pipe(
                        catchError(() => of([])),
                        finalize(() => this.loadingSubject.next(false))
                    )
                    // subscribe method to receive Observable type data when it is ready
                    .subscribe((result: any) => {
                            this._produccionesSubject.next(result.rows);
                            this.countSubject.next(result.total);
                        }
                    );
            }
        }
    }
    /**
    loadProducciones(pageIndex: number, pageSize: number, sortActive: string, sortDirection: string) {
        // use pipe operator to chain functions with Observable type
        this.loadingSubject.next(true);
        this.produccionService.getProduccionesPagina(pageIndex, pageSize, sortActive, sortDirection)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            // subscribe method to receive Observable type data when it is ready
            .subscribe((result: any) => {
                    this._produccionesSubject.next(result.rows);
                    this.countSubject.next(result.total);
                }
            );
    }
    **/

    loadProduccionesTitulo(pageIndex: number, pageSize: number, sortActive: string, sortDirection: string, term: string) {
        this.loadingSubject.next(true);
        this.produccionService.getProduccionesPaginaTitulo(pageIndex, pageSize, sortActive, sortDirection, term)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            // subscribe method to receive Observable type data when it is ready
            .subscribe((result: any) => {
                    this._produccionesSubject.next(result.rows);
                    this.countSubject.next(result.total);
                }
            );
    }

    connect(collectionViewer: CollectionViewer): Observable<Produccion[]> {
        console.log('Connecting data source');
        return this._produccionesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this._produccionesSubject.complete();
        this.countSubject.complete();
        this.loadingSubject.complete();
    }

}
