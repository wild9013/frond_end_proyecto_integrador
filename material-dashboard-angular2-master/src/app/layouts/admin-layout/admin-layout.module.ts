import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AgregarproduccionesComponent } from '../../agregarproducciones/agregarproducciones.component';
import { EditarproduccionesComponent } from '../../editarproducciones/editarproducciones.component';
import { LoginComponent} from '../../login/login.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatIconModule, MatDatepickerModule, MatExpansionModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import {ClickMeComponent} from "../../agregarproducciones/click-me.component";
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatDatepickerModule,
        MatExpansionModule,
        TranslateModule

    ],

    declarations: [
        DashboardComponent,
        UserProfileComponent,
        AgregarproduccionesComponent,
        EditarproduccionesComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        ClickMeComponent,
        LoginComponent
    ]
})

export class AdminLayoutModule {}
