import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-user-profile',
  templateUrl: './agregarproducciones.component.html',
  styleUrls: ['./agregarproducciones.component.css']
})
export class AgregarproduccionesComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
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
