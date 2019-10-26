import { Component, OnInit } from '@angular/core';
import { Produccion } from 'app/produccion';
import { ProduccionService } from 'app/produccion.service';
import { TproduccionService } from 'app/tproduccion.service';
import { TranslateService } from '@ngx-translate/core';
import { TipoProduccion } from 'app/tipoProduccion';
import { FormControl, Validators } from '@angular/forms';
import {AppUserAuth} from '../security/app-user-auth';
import {SecurityService} from '../security/security.service';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editarproducciones',
  templateUrl: './editarproducciones.component.html',
  styleUrls: ['./editarproducciones.component.scss']
})
export class EditarproduccionesComponent implements OnInit {

  securityObject: AppUserAuth = null;

Produccionuno = new Produccion();
Tproducciones: TipoProduccion[];
private emailResponse;
private truefalse = false;
public active = true;
public submitted = false;

  constructor(private produccionService: ProduccionService,private tproduccionService: TproduccionService, private translate: TranslateService,
              private router: Router,
              private location: Location,
              private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit() {
    this.tproduccionService
      .getTproducciones()
      .subscribe((data: TipoProduccion[])=>{
        this.Tproducciones = data;
      })
  }

}

export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
  }
}
