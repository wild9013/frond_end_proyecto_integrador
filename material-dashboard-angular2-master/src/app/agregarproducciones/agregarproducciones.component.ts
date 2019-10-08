import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {Produccion} from '../produccion';
import {TipoProduccion} from '../tipoProduccion';
import {ClickMeComponent} from './click-me.component';
import {ProduccionService} from '../produccion.service';
import {TproduccionService} from '../tproduccion.service';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './agregarproducciones.component.html',
  styleUrls: ['./agregarproducciones.component.css']
})

export class AgregarproduccionesComponent implements OnInit {


  Produccionuno = new Produccion();
  Tproducciones: TipoProduccion[];
    private emailResponse;
    private truefalse = false;
   public active = true;
    public submitted = false;
  constructor(private produccionService: ProduccionService, private tproduccionService: TproduccionService,private translate: TranslateService) {}

    ngOnInit() {
        this.tproduccionService
            .getTproducciones()
            .subscribe((data: TipoProduccion[]) => {
                this.Tproducciones = data;
            });
    }

    onClickMe(produccion: Produccion) {
      console.log("Im here");
      
      this.produccionService.addProduccion(produccion);
    }

    editarProduccion(data){

      console.log(data);
      this.Produccionuno = data;
      
    }

   /* onSubmit(Produccionuno: NgForm) {
        this.submitted = true;
    }*/

}

export class ClicMeComponent {
    clickMessage = '';

    onClickMe() {
      this.clickMessage = 'Youdsfasdf are my hero!';
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



