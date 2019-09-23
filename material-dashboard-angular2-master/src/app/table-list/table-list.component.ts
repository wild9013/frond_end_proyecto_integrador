import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Produccion} from '../produccion';
import {ProduccionService} from '../produccion.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import {ProduccionDataSource} from '../ProduccionDataSource';
import {tap} from 'rxjs/operators';
import {MessageService} from '../message.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements AfterViewInit, OnInit {

  produccion: Produccion;
  public displayedColumns = ['produccionID', 'titulo', 'resumen', 'fechaPublicacion'];
  public dataSource: ProduccionDataSource;

  constructor(
      private produccionService: ProduccionService,
      private messageService: MessageService,
      private translate: TranslateService) { }

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {

    this.dataSource.counter$
        .pipe(
            tap((count) => {
              this.paginator.length = count;
            })
        )
        .subscribe();

    // when paginator event is invoked, retrieve the related data
    this.paginator.page
        .pipe(
            tap(() => this.dataSource.loadProducciones(this.paginator.pageIndex, this.paginator.pageSize)),
        )
        .subscribe();
    this.messageService.add('TableListComponent: PI:' + this.paginator.pageIndex + ' PS' + this.paginator.pageSize);
  }

  ngOnInit() {
    // set paginator page size
    this.paginator.pageSize = 5;

    this.dataSource = new ProduccionDataSource(this.produccionService);
    this.dataSource.loadProducciones(this.paginator.pageIndex, this.paginator.pageSize);
  }

}
