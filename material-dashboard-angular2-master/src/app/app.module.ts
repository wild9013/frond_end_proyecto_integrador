import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**import { HttpModule } from '@angular/http'; */
import { RouterModule } from '@angular/router';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


//Translation
import {
  TranslateLoader,
  TranslateModule,
  MissingTranslationHandler,
  TranslateService,
  TranslateParser
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { MyMissingTranslationHandler, MyMatPaginatorIntl } from './handler';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MessagesComponent } from './messages/messages.component';
import {BrowserModule} from "@angular/platform-browser";


export function createCustomMatPaginatorIntl(
  translateService: TranslateService,
  translateParser: TranslateParser
) {
  return new MyMatPaginatorIntl(translateService, translateParser);
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
      BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSelectModule,

    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler }
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MessagesComponent
  ],
  providers: [{
    provide: MatPaginatorIntl,
    deps: [TranslateService, TranslateParser],
    useFactory: createCustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
