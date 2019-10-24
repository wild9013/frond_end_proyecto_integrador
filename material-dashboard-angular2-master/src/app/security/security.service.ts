import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { LOGIN_MOCKS } from './login-mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  securityObject: AppUserAuth = new AppUserAuth();

  constructor() { }

  login(entity: AppUser):
      Observable<AppUserAuth> {
    this.resetSecurityObject();
    Object.assign(this.securityObject,
        LOGIN_MOCKS.find(
            user => user.userName.toLowerCase() ===
                entity.userName.toLowerCase()));
    if (this.securityObject.userName !== "") {
      localStorage.setItem("bearerToken",
          this.securityObject.bearerToken);
    }
    return of<AppUserAuth>(this.securityObject);
  }

  logout(): void {
    this.resetSecurityObject();
  }

  resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;
    this.securityObject.canAccessProduccion = false;
    this.securityObject.canAddProduccion = false;
    this.securityObject.canSaveProduccion = false;

    localStorage.removeItem("bearerToken");
  }
}
