import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {Produccion} from '../produccion';
import {ClickMeComponent} from './click-me.component';
import {ProduccionService} from '../produccion.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './agregarproducciones.component.html',
  styleUrls: ['./agregarproducciones.component.css']



})
export class AgregarproduccionesComponent implements OnInit {
    // creacion de variable contact

  Produccionuno = new Produccion();
    private emailResponse;
    private truefalse = false;
   public active = true;
    public submitted = false;
  constructor(private produccionService: ProduccionService,) {
        }


    onClickMe(produccion: Produccion) {
        this.produccionService.addProduccion(produccion)
    }
  ngOnInit() {
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



