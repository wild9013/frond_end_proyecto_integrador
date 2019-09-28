import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Produccion} from '../produccion';
import {ProduccionService} from '../produccion.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {ProduccionDataSource} from '../ProduccionDataSource';
import {tap} from 'rxjs/operators';
import {MessageService} from '../message.service';
import { TranslateService } from '@ngx-translate/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})




export class TableListComponent implements AfterViewInit, OnInit {

  produccion: Produccion;
  public displayedColumns = ['titulo', 'resumen', 'fechaPublicacion', 'tipoProduccion'];
  public dataSource: ProduccionDataSource;
  public sortActive: string;
  public sortDirection: string;
  public filter: string;
  tituloInput = new FormControl();
  resumenInput = new FormControl();
  // tipoSelect = new FormControl();

  constructor(
      private produccionService: ProduccionService,
      private messageService: MessageService,
      private translate: TranslateService,
      private _snackBar: MatSnackBar) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngAfterViewInit() {

    this.openSnackBar(this.paginator.length + '', "paginator length")

    this.dataSource.counter$
        .pipe(
            tap((count) => {
              this.paginator.length = count;
            })
        )
        .subscribe();

    this.paginator.page
        .pipe(
            tap(() => {
              this.dataSource.loadProducciones(this.paginator.pageIndex, this.paginator.pageSize,
                this.sortActive, this.sortDirection, this.filter);
              // this.openSnackBar(this.paginator.length + '', "pagina length");
            }),
        )
        .subscribe();
  }

  ngOnInit() {
    // set paginator page size
    this.paginator.pageSize = 5;
    this.sortActive = 'titulo';
    this.sortDirection = 'ASC';
    this.filter = '*';

    this.dataSource = new ProduccionDataSource(this.produccionService);
    this.dataSource.loadProducciones(this.paginator.pageIndex, this.paginator.pageSize, this.sortActive, this.sortDirection, '*');
  }

  applyFilterTitulo(filterValue: string) {
    this.resumenInput.setValue('');
    // this.tipoSelect.reset();
    this.paginator.pageIndex = 0;
    this.sortActive = 'titulo';
    this.sortDirection = 'ASC';
    this.filter = filterValue;
    this.dataSource.loadProducciones(this.paginator.pageIndex, this.paginator.pageSize,
                                          this.sortActive, this.sortDirection, this.filter);
    if (this.filter === '') {
      // this.openSnackBar(filterValue, "titulo")
    }
  };

  applyFilterResumen(filterValue: string) {
    this.tituloInput.setValue('');
    // this.tipoSelect.reset();
    this.paginator.pageIndex = 0;
    this.sortActive = 'resumen';
    this.sortDirection = 'ASC';
    this.filter = filterValue;
    this.dataSource.loadProducciones(this.paginator.pageIndex, this.paginator.pageSize,
        this.sortActive, this.sortDirection, this.filter);
  }

  /**
  applyFilterTipoProduccion(filterValue: string) {
    this.tituloInput.setValue('');
    this.resumenInput.setValue('');
    this.paginator.pageIndex = 0;
    this.sortActive = 'tipoProduccion';
    this.sortDirection = 'ASC';
    this.filter = filterValue;
    this.dataSource.loadProducciones(this.paginator.pageIndex, this.paginator.pageSize,
        this.sortActive, this.sortDirection, this.filter);
  }
   **/

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
