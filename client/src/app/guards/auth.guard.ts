import { Injectable, NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanLoad, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/modules/auth/services/auth.service';
import {UserService} from "../shared/services/user.service";

const redirectURL = '/invoices';
const DEFAULT_REDIRECT = '/auth/login';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  readonly isLogged: Observable<boolean>;

  constructor(private _authService: AuthService, private router: Router, private _ngZone: NgZone) {}

  canLoad(): Observable<boolean> | boolean {
    return true; // WORKS
    // return this.isLogged; // ERROR: all routing stops from and to the current page
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // this will be passed from the route config on the data property
    const state_url = state.url;
    let is_logged = false;

    return this._authService.auth.map(auth => {

      if (undefined !== auth) {
        is_logged = true;
      }

      let is_allowed = false;

      switch (state_url) {
        case '/auth/login':
          if (is_logged === false) {
            is_allowed = true;
          } else {
            this._ngZone.run(() => this.router.navigateByUrl(redirectURL));
            is_allowed = false;
          }

          break;
        case '/auth/register':
          if (is_logged === false) {
            is_allowed = true;
          } else {
            this._ngZone.run(() => this.router.navigateByUrl(redirectURL));
            is_allowed = false;
          }
          break;
        default:
          if (is_logged === true) {
            is_allowed = true;
          } else {
            this.router.navigate([DEFAULT_REDIRECT]);
            is_allowed = false;
          }
      }

      return is_allowed;
    });
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }

  canActivateOnlyAdmin(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

  }
}
