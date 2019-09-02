import { Component, OnInit } from '@angular/core';
import {Produccion} from '../produccion';
import {ProduccionService} from '../produccion.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  producciones: Produccion[];

  constructor(private produccionService: ProduccionService) { }

  ngOnInit() {
    this.getProducciones();
  }

  getProducciones(): void {
    this.produccionService.getProducciones()
        .subscribe(producciones => this.producciones = producciones);
  }


}
