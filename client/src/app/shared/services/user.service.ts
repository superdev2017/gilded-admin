import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUser, User } from 'app/shared/models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { ToastService } from 'app/typescripts/pro/alerts';

const USERS_PATH = '/users';
const TOAST_POSITION = { positionClass: 'toast-bottom-right' };

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<IUser>;
  users: Observable<IUser[]>;

  // cache value of current logged user
  currentUser: Observable<any>;

  constructor(private _fireStore: AngularFirestore, private toastr: ToastService) {
    this.usersCollection = this._fireStore.collection<IUser>(USERS_PATH);
  }

  fetchOne(doc_id): Observable<any> {
    const userCollection = this._fireStore.collection(USERS_PATH).doc(doc_id);
    // populate current user value
    this.currentUser = userCollection.valueChanges().map(user => new User(user));
    return userCollection.valueChanges();
  }

  fetchOneByEmail(email): Observable<any> {
    return this._fireStore.collection(USERS_PATH, ref => ref.where('email', '==', email)).valueChanges();
  }

  fetchByKey(key: string, keyValue: string): Observable<any> {
    return this._fireStore.collection<IUser>(USERS_PATH, ref => ref.where(key, '==', keyValue)).valueChanges();
  }

  fetchAll(): Observable<any> {
    this.usersCollection = this._fireStore.collection<IUser>(USERS_PATH);
    this.users = this.usersCollection.valueChanges();
    return this.users;
  }

  store(user: IUser): Promise<any> {
    user.created_at = this.serverTime;
    const userData = Object.assign({}, user);
    return this._fireStore
      .collection<IUser>(USERS_PATH)
      .doc(user.id)
      .set(userData)
      .catch(error => {
        this.toastr.error(error.message, 'Error saving user info', TOAST_POSITION);
        return false;
      });
  }

  update(user: IUser): Promise<any> {
    user.updated_at = this.serverTime;
    return this._fireStore
      .collection<IUser>(USERS_PATH)
      .doc(user.id)
      .update(Object.assign({}, user))
      .then(() => {
        return true;
      })
      .catch(error => {
        this.toastr.error(error.message, 'Error saving user info', TOAST_POSITION);
        return false;
      });
  }

  get serverTime() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
