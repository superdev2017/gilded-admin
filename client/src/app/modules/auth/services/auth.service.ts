import { Injectable } from '@angular/core';
import { User } from 'app/shared/models';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CloudUser } from 'app/shared/models/user.model';
import * as firebase from 'firebase';
import { ToastService } from 'app/typescripts/pro/alerts';
import {UserService} from "../../../shared/services/user.service";

const IMG_NO_AVATAR = '/assets/images/no-avatar.png';

@Injectable()
export class AuthService {
  public userSubject = new BehaviorSubject<any>(undefined);
  public currentUser = this.userSubject.distinctUntilChanged();
  public _authUserDetails: firebase.User;

  cloudUser: CloudUser;

  // shared user data
  constructor(private _firebaseAuth: AngularFireAuth, private _firestore: AngularFirestore, private toastr: ToastService, private _userService: UserService) {
    this._loadUser();
  }

  get auth(): Observable<any> {
    return this._firebaseAuth.authState.map(auth => {
      if (auth) {
        const cloudUser = new CloudUser(auth.providerData[0]);
        // reset uid with the same authenticate uid
        cloudUser.uid = auth.uid;

        // store providers
        auth.providerData.forEach((provider: any, index) => {
          cloudUser.providers[index] = provider.providerId;
        });

        if (!cloudUser.photoURL) {
          cloudUser['photoURL'] = IMG_NO_AVATAR;
        }

        this.cloudUser = cloudUser;
        return cloudUser;
      } else {
        return undefined;
      }
    });
  }

  _loadUser() {
    this._firebaseAuth.authState.subscribe(user => {
      this._authUserDetails = null;

      if (user) {
        this._authUserDetails = user;
        this.userSubject.next(user.providerData[0]);
      }
    });
  }

  signInWithGoogle(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();

    // return this._firebaseAuth.auth.currentUser.linkWithPopup(provider)
    return this._firebaseAuth.auth
      .signInWithPopup(provider)
      .then(connectedUser => {
        this.cloudUser = new CloudUser(connectedUser.user.providerData[0]);
        this.cloudUser.uid = connectedUser.user.uid;
        return connectedUser;
      })
      .catch(error => this.toastr.error(error));
  }

  signInRegular(email: string, password: string): Promise<any> {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(connectedUser => {
      this.cloudUser = new CloudUser(connectedUser.providerData[0]);
      this.cloudUser.uid = connectedUser.uid;
      // const provider = new firebase.auth.GoogleAuthProvider();

      // this._firebaseAuth.auth.currentUser.linkWithPopup(provider);
      return connectedUser;
    });
  }

  signUpWithEmailPassword(email: string, password: string): Promise<any> {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  sendEmailVerification(): Promise<any> {
    return this._firebaseAuth.auth.currentUser.sendEmailVerification();
  }

  sendEmailResetPassword(email: string): Promise<any> {
    return this._firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  signOut() {
    this.cloudUser = undefined;
    this.userSubject.next(undefined);
    return this._firebaseAuth.auth.signOut();
  }

  get serverTime() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  get firebaseUser() {
    return this._firebaseAuth.auth;
  }

  updateFirebaseProfile(profile_data: any) {
    return this._firebaseAuth.auth.currentUser.updateProfile(profile_data);
  }

  updateFirebasePassword(password: string) {
    return this._firebaseAuth.auth.currentUser.updatePassword(password);
  }

  get randomStringPass(): string {
    return Math.random()
      .toString(36)
      .substring(2, 8); // string with 6 chars
  }

  /**
   * Get authorized user
   * @returns {Promise<any>}
   */
  get authedUser(): Promise<any> {

    return new Promise(resolve => {
      this.auth.subscribe(data => {
        if(data) {
          this._userService.fetchOne(data.uid).subscribe(u => {
            resolve(u)
          })
        } else {
          resolve(false)
        }
      }, error2 => {
        resolve(false)
      })
    })


  }
}
