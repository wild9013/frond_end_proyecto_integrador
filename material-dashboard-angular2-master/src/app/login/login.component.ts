import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppUser } from '../security/app-user';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl: string;

  constructor(private securityService: SecurityService, private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  login() {
    this.securityService.login(this.user)
        .subscribe(resp => {
              this.securityObject = resp;
              if (this.returnUrl) {
                this.router.navigateByUrl(this.returnUrl);
              }
            },
            () => {
              // Initialize security object to display error message
              this.securityObject = new AppUserAuth();
            });
  }

}
