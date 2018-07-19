import { Injectable } from '@angular/core';
import { IInvoice, Invoice } from 'app/modules/invoice/models/invoice.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { ToastService } from 'app/typescripts/pro/alerts';

const INVOICES_PATH = '/invoices';
const TOAST_POSITION = { positionClass: 'toast-bottom-right' };

@Injectable()
export class InvoiceService {
  invoicesCollection: AngularFirestoreCollection<IInvoice>;
  invoices: Observable<IInvoice[]>;

  constructor(private _fireStore: AngularFirestore, private toastr: ToastService) {}

  get serverTime() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  get currencyOptions(): Array<any> {
    return [{ value: 'USD', label: 'USD' }, { value: 'EUR', label: 'EUR' }, { value: 'CAD', label: 'CAD' }, { value: 'AUD', label: 'AUD' }];
  }

  fetchInvoice(invoice_doc): Observable<any> {
    return this._fireStore.collection<IInvoice>(INVOICES_PATH, ref => ref.where('ref', '==', invoice_doc)).valueChanges();
  }

  fetchAll(): Observable<any> {
    return this._fireStore.collection<IInvoice>(INVOICES_PATH).valueChanges();
  }

  fetchLastInvoice(user_id): Observable<any> {
    return this._fireStore
      .collection<IInvoice>(INVOICES_PATH, ref =>
        ref
          .where('user_id', '==', user_id)
          .orderBy('created_at', 'desc')
          .limit(1)
      )
      .valueChanges();
  }

  fetchByUser(user_id): Observable<any> {
    return this._fireStore
      .collection<IInvoice>(INVOICES_PATH, ref => ref.where('user_id', '==', user_id).orderBy('created_at', 'desc'))
      .valueChanges();
  }

  fetchAllByDocId(): Observable<any> {
    this.invoicesCollection = this._fireStore.collection<IInvoice>(INVOICES_PATH);
    return this._fireStore
      .collection<IInvoice>(INVOICES_PATH)
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as IInvoice;
          return Object.assign({ ref: a.payload.doc.id }, data);
        });
      });
  }

  async store(invoice: Invoice): Promise<string> {
    const docId = this._fireStore.createId();
    invoice.created_at = this.serverTime;
    invoice.updated_at = this.serverTime;

    await this._fireStore
      .collection<IInvoice>(INVOICES_PATH)
      .doc(docId)
      .set(Object.assign({ ref: docId }, invoice))
      .catch(error => {
        this.toastr.error(error.message, 'Error saving invoice', TOAST_POSITION);
        return false;
      });
    return docId;
  }

  update(invoice: Invoice): Promise<any> {
    invoice.updated_at = this.serverTime;
    const invoiceData = Object.assign({}, invoice);

    return this._fireStore
      .collection<IInvoice>(INVOICES_PATH)
      .doc(invoice.ref)
      .update(invoiceData)
      .catch(error => {
        this.toastr.error(error.message, 'Error saving invoice', TOAST_POSITION);
        return false;
      });
  }
}
