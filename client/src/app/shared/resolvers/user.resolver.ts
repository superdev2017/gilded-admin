import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { CloudUser } from 'app/shared/models';

@Injectable()
export class UserResolve implements Resolve<Observable<any>> {
  constructor(private _firebaseAuth: AngularFireAuth) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return Observable.of(
      this._firebaseAuth.authState.map(auth => {
        if (auth) {
          const cloudUser = new CloudUser(auth.providerData[0]);
          cloudUser.uid = auth.uid;
          return cloudUser;
        } else {
          return undefined;
        }
      })
    );
  }
}
