import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { PaymentOption } from '../models/payment-option.model';
import * as firebase from 'firebase/app';
import { ToastService } from 'app/typescripts/pro/alerts';

const PAYMENT_OPTIONS_PATH = '/payment_options';
const TOAST_POSITION = { positionClass: 'toast-bottom-right' };

@Injectable()
export class PaymentService {
  constructor(private _fireStore: AngularFirestore, private toastr: ToastService) {}

  get serverTime() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  fetchPaymentOption(user_id: string, currency: string): Observable<any> {
    return this._fireStore
      .collection<PaymentOption>(PAYMENT_OPTIONS_PATH, ref =>
        ref
          .where('user_id', '==', user_id)
          .where('currency', '==', currency.toUpperCase())
          .orderBy('currency', 'asc')
      )
      .valueChanges();
  }

  fetchPaymentOptions(user_id: string): Observable<any> {
    return this._fireStore
      .collection<PaymentOption>(PAYMENT_OPTIONS_PATH, ref => ref.where('user_id', '==', user_id).orderBy('currency', 'asc'))
      .valueChanges();
  }

  storePaymentOption(paymentOption: PaymentOption): Promise<any> {
    const docId = this._fireStore.createId();
    return this._fireStore
      .collection<PaymentOption>(PAYMENT_OPTIONS_PATH)
      .doc(docId)
      .set(Object.assign({ ref: docId }, paymentOption))
      .catch(error => this.toastr.error(error.message, 'Wallet', TOAST_POSITION));
  }

  removePaymentOption(paymentOption: PaymentOption): Promise<any> {
    return this._fireStore
      .collection<PaymentOption>(PAYMENT_OPTIONS_PATH)
      .doc(paymentOption.ref)
      .delete()
      .catch(error => this.toastr.error(error.message, 'Wallet', TOAST_POSITION));
  }
}
