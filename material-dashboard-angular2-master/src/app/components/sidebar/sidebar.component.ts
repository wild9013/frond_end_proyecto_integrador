import { Component, OnInit } from '@angular/core';

import { AppUserAuth } from '../../security/app-user-auth';
import { SecurityService } from '../../security/security.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    securityOb: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
   // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    //{ path: '/agregarproducciones', title: 'Agregar producciones',  icon:'person', class: '' },
    { path: '/table-list', securityOb: 'securityObject.canAccessProduccion', title: 'Producciones',  icon:'content_paste', class: '' },
    { path: '/editarproducciones', securityOb: 'securityObject.canAddProduccion', title: 'Editar producciones', icon:'dashboard', class: ''},
    //{ path: '/login', securityOb: '' , title: 'Login', icon:'person', class: ''}
  //  { path: '/user-profile', title: 'Usuarios',  icon:'person', class: '' },
    //  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  //  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  //  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },

  //  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService) {
      this.securityObject = securityService.securityObject;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout(): void {
      this.securityService.logout();
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
