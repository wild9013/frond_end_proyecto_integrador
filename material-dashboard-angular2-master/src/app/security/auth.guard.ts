import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SecurityService} from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private securityService: SecurityService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Get property name to check
    let claimName: string = next.data["claimName"];

    if (this.securityService.securityObject.isAuthenticated && this.securityService.securityObject[claimName]) {
      return true;
    }
    else {
      this.router.navigate(['login'],
          { queryParams: { returnUrl: state.url } });
      return false;
    }

  }


  
}
