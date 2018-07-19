import {Injectable, NgZone} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "../shared/services/user.service";
import {AuthService} from "../modules/auth/services/auth.service";

/**
 * Default redirect url
 * @type {string}
 */
const DEFAULT_REDIRECT = '/auth/login';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private _userService: UserService, private _authService: AuthService, private router: Router, private _ngZone: NgZone) { }

  /**
   * Checking permission
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean> | Promise<boolean> | boolean}
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let is_logged = false;

    return this._authService.authedUser.then(data => {
      if(data && data.isAdmin == true) {
        is_logged = true
      } else {
        this._ngZone.run(() => this.router.navigateByUrl(DEFAULT_REDIRECT));
      }
      return is_logged
    })
  }
}
