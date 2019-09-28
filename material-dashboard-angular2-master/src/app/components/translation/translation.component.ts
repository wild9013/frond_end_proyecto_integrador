import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  public locales = [
    {
      key: 'en',
      value: 'English'
    },
    {
      key: 'es',
      value: 'Español'
    }
  ];
  public activeLang = {
    key: 'es',
    value: 'Español'
  };

  constructor(
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'es']);

    const browserLang = translate.getBrowserLang();
    if (browserLang.match(/en|es/)) {
      this.activeLang = this.locales.find((entry) => entry.key === browserLang);
    }
    this.translate.setDefaultLang(this.activeLang.key);
    this.translate.use(this.activeLang.key);
  }

  ngOnInit() {
  }

  public selectLocale(lang) {
    this.activeLang = lang;
    this.translate.use(this.activeLang.key);
  }
}
