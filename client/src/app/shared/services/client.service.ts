import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Client } from 'app/shared/models/client.model';
import { Subject } from 'rxjs/Subject';
import { IInvoice } from 'app/modules/invoice/models/invoice.model';

const CLIENTS_PATH = '/clients';
const INVOICES_PATH = '/invoices';

@Injectable()
export class ClientService {
  clientCollection: AngularFirestoreCollection<Client>;
  clients: Observable<Client[]>;

  constructor(private _fireStore: AngularFirestore) {
    this.clientCollection = this._fireStore.collection<Client>(CLIENTS_PATH);
  }

  search(startAt: Subject<string>, endAt: Subject<string>) {
    return this._fireStore
      .collection<Client>(CLIENTS_PATH, ref =>
        ref
          .orderBy('name')
          .startAt(startAt)
          .endAt(endAt)
      )
      .valueChanges();
  }

  fetchByUser(user_id): Observable<any> {
    return this._fireStore
      .collection<Client>(CLIENTS_PATH, ref => ref.where('user_id', '==', user_id))
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Client;
          return Object.assign({ ref: a.payload.doc.id }, data);
        });
      });
  }

  fetchOne(doc_id: string): Observable<any> {
    return this._fireStore
      .collection<Client>(CLIENTS_PATH)
      .doc(doc_id)
      .valueChanges();
  }

  fetchAll(): Observable<any> {
    this.clientCollection = this._fireStore.collection<Client>(CLIENTS_PATH);
    this.clients = this.clientCollection.valueChanges();
    return this.clients;
  }

  store(client: Client): Promise<any> {
    const docId = this._fireStore.createId();
    client.ref = docId;
    return this._fireStore
      .collection<Client>(CLIENTS_PATH)
      .doc(docId)
      .set(Object.assign({ ref: docId }, client));
  }

  update(client: Client): Promise<any> {
    return this._fireStore
      .collection<Client>(CLIENTS_PATH)
      .doc(client.ref)
      .update(Object.assign({}, client));
  }

  delete(client_id: string): Promise<any> {
    return this._fireStore
      .collection<Client>(CLIENTS_PATH)
      .doc(client_id)
      .delete();
  }

  fetchInvoicesByClientId(client_id: string): Observable<any> {
    return this._fireStore.collection<IInvoice>(INVOICES_PATH, ref => ref.where('client_id', '==', client_id)).valueChanges();
  }
}
