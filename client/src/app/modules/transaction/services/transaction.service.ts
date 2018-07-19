import { Injectable } from '@angular/core';
import { IInvoice, Invoice } from 'app/modules/invoice/models/invoice.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { ToastService } from 'app/typescripts/pro/alerts';
import { Transaction } from '../models/transaction.model';

const TRANSACTION_PATH = '/transactions';
const TOAST_POSITION = { positionClass: 'toast-top-center' };
@Injectable()
export class TransactionService {
  invoicesCollection: AngularFirestoreCollection<IInvoice>;
  invoices: Observable<IInvoice[]>;

  constructor(private _fireStore: AngularFirestore, private toastr: ToastService) {}

  get serverTime() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  fetchTransaction(transaction_id): Observable<any> {
    return this._fireStore.collection<IInvoice>(TRANSACTION_PATH, ref => ref.where('ref', '==', transaction_id)).valueChanges();
  }

  fetchTransactionsByUser(user_id): Observable<any> {
    return this._fireStore
      .collection<IInvoice>(TRANSACTION_PATH, ref => ref.where('invoice_user_id', '==', user_id).orderBy('created_at', 'desc'))
      .valueChanges();
  }

  async store(transaction: Transaction): Promise<string> {
    const docId = this._fireStore.createId();
    transaction.created_at = this.serverTime;
    transaction.updated_at = this.serverTime;

    await this._fireStore
      .collection<Transaction>(TRANSACTION_PATH)
      .doc(docId)
      .set(Object.assign({ ref: docId }, transaction))
      .catch(error => this.toastr.error(error.message, 'Transactions', TOAST_POSITION));
    return docId;
  }
}
