import { Component, OnInit } from '@angular/core';
import {PRODUCCIONES} from '../mock-producciones';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  producciones = PRODUCCIONES;

  constructor() { }

  ngOnInit() {
  }

}
