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
  produccionSeleccionada = 0;
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
      console.log(this.Tproducciones)
      console.log(this.produccionSeleccionada)
      produccion.tipoProduccion = this.Tproducciones[this.produccionSeleccionada-1]
      
      this.produccionService.addProduccion(produccion);
    }

    editarProduccion(data){

      console.log(data);
      this.Produccionuno = data;
      this.produccionSeleccionada = this.Produccionuno.tipoProduccion.tipoProdID;
      //let newDate = new Date(this.Produccionuno.fechaPublicacion);
      //this.Produccionuno.fechaPublicacion = this.formatDate(newDate);
      
    }

    formatDate(iDate: Date){
      var inputDate = new Date(iDate);
      var formattedDate = inputDate.getFullYear()+'-'+(inputDate.getMonth() + 1)+'-'+inputDate.getDate();
      return formattedDate;
    }

    changeSelectedOption(){

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





