import {BehaviorSubject, Observable, of} from 'rxjs';
import {ProduccionService} from './produccion.service';
import { CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Produccion} from './produccion';
import {catchError, finalize, tap} from 'rxjs/operators';

export class ProduccionDataSource extends DataSource<Produccion> {
    // add variables to hold the data and number of total records retrieved asynchronously
    // BehaviourSubject type is used for this purpose
    private produccionesSubject = new BehaviorSubject<Produccion[]>([]);

    // to show the total number of records
    private countSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public counter$ = this.countSubject.asObservable();
    public loading$ = this.loadingSubject.asObservable();

    constructor(private produccionService: ProduccionService) {
        super();
    }

    loadProducciones(pageIndex: number, pageSize: number) {
        // use pipe operator to chain functions with Observable type
        this.loadingSubject.next(true);
        this.produccionService.getProducciones(pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            // subscribe method to receive Observable type data when it is ready
            .subscribe((result: any) => {
                    this.produccionesSubject.next(result.rows);
                    this.countSubject.next(result.total);
                }
            );
    }
    connect(collectionViewer: CollectionViewer): Observable<Produccion[]> {
        console.log('Connecting data source');
        return this.produccionesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.produccionesSubject.complete();
        this.countSubject.complete();
        this.loadingSubject.complete();
    }
}
