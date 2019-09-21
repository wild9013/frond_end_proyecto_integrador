import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component'

/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/
/*export class AppComponent {

}*/
/*export class AppComponent implements OnInit {
  //@ViewChild(NavbarComponent) activeLang;
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }
  ngOnInit() {
  }
  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }*/

  @Component({
    selector: 'app-root',
    template: `
      <div>
        <h2>{{ 'HOME.TITLE' | translate }}</h2>
        <label>
          {{ 'HOME.SELECT' | translate }}
          <select #langSelect (change)="translate.use(langSelect.value)">
            <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
          </select>
        </label>
      </div>
    `,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

  export class AppComponent {
    constructor(public translate: TranslateService) {
      translate.addLangs(['en', 'es']);
      translate.setDefaultLang('en');
  
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }
  }

