import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../services/invoice.service';
import { Invoice, InvoiceItem } from '../models/invoice.model';
import { Observable } from 'rxjs/Observable';
import { Client } from 'app/shared/models/client.model';
import { ClientService } from 'app/shared/services/client.service';
import { Subject } from 'rxjs/Subject';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { User } from 'app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CloudUser } from 'app/shared/models/user.model';
import { CloudFunctionsService } from 'app/shared/services/cloud-functions.service';
import { ToastService } from 'app/typescripts/pro/alerts';
import { UserService } from 'app/shared/services/user.service';
import { PaymentService } from 'app/modules/payment/services/payment.service';
import { PaymentOption } from 'app/modules/payment/models/payment-option.model';

const TOAST_POSITION = { positionClass: 'toast-bottom-right' };
const INVOICE_MIN_NUMBER = 105;
const INVOICE_MAX_NUMBER = 500;
const LABEL_ADD_CONTACT = '+ ADD NEW CONTACT';

@Component({
  selector: 'invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.scss']
})
export class InvoiceEditComponent implements OnInit, OnDestroy {
  editInvoiceForm: FormGroup;
  invoice_items: Array<InvoiceItem> = [];
  invoice: Invoice;
  invoiceSub: Subscription;

  cloudUser: CloudUser;
  currentUser: User;
  clients: Array<Client>;
  clientText = '';
  selected_client: Client;

  currencyOptions: Array<any>;

  showCreateClient = false;
  subtotal_amount = 0.0;
  total_amount = 0.0;
  invoice_method = 'address';

  fontSize = '1.2em';

  constructor(
    private _invoiceService: InvoiceService,
    private _clientService: ClientService,
    private _cloudFunctions: CloudFunctionsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private toastr: ToastService,
    private _userService: UserService,
    private _paymentService: PaymentService
  ) {
    this.editInvoiceForm = new FormGroup({
      invoice_number: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      client_id: new FormControl('', Validators.required),
      date_due: new FormControl(0, Validators.required),
      fiat_currency: new FormControl('', Validators.required),
      notes: new FormControl(''),
      discount: new FormControl(0),
      total_amount: new FormControl(this.total_amount, Validators.required),
      invoice_method: new FormControl('address', Validators.required)
    });

    this.onChanges();
  }

  ngOnInit() {
    // load current user details
    this._userService.currentUser
      .map(user => {
        if (user) {
          this._loadCurrencyOptions(user.id);
        }
        return user;
      })
      .subscribe(user => (this.currentUser = user));

    this.invoiceSub = this.activeRoute.params.pluck('id').subscribe(invoice_doc => {
      this._loadClients(invoice_doc);
    });

    const invoiceItem: InvoiceItem = { description: '', amount: 1.0, quantity: 1, unit_price: 1.0 };
    this.invoice_items.push(invoiceItem);
  }

  ngOnDestroy() {
    this.invoiceSub.unsubscribe();
  }

  onChanges() {
    this.editInvoiceForm.controls.client_id.valueChanges.subscribe(val => {
      if (val === '-1') {
        this.showCreateClient = true;
      }
    });
  }

  private _loadClients(invoice_doc) {
    const data = this.activeRoute.snapshot.data;
    data.user.subscribe((cloudUser: CloudUser) => {
      if (cloudUser) {
        this.cloudUser = cloudUser;

        this._clientService
          .fetchByUser(cloudUser.uid)
          .map(respClients => {
            respClients.forEach((client: Client) => {
              client['label'] = client.name + ' <' + client.email + '>';
              client['value'] = client.ref;
              // client['icon'] = client.logo;
            });

            respClients.push(Object.assign(new Client({ label: LABEL_ADD_CONTACT, value: '-1' })));
            return respClients;
          })
          .subscribe(resp => {
            this.clients = resp;
            this._loadInvoice(invoice_doc);
          });
      } else {
        this._loadInvoice(invoice_doc);
      }
    });
  }

  private _loadCurrencyOptions(user_id) {
    const currencyOptions = this._invoiceService.currencyOptions;

    this._paymentService.fetchPaymentOptions(user_id).subscribe((paymentOptions: Array<PaymentOption>) => {
      paymentOptions.forEach((item: PaymentOption) => {
        currencyOptions.push({ value: item.currency, label: item.currency });
      });

      this.currencyOptions = currencyOptions;
    });
  }

  private _loadInvoice(invoice_doc) {
    this._invoiceService
      .fetchInvoice(invoice_doc)
      .map(invoices => invoices[0])
      .subscribe((invoiceData: Invoice) => {
        if (invoiceData) {
          this.invoice = invoiceData;
          this.invoice_items = invoiceData.items;
          this.invoice_method = invoiceData.invoice_method;

          this.editInvoiceForm.patchValue({
            invoice_number: invoiceData.invoice_number,
            title: invoiceData.title,
            client_id: invoiceData.client_id,
            date_due: invoiceData.date_due,
            fiat_currency: invoiceData.fiat_currency,
            notes: invoiceData.notes,
            discount: invoiceData.discount,
            invoice_method: invoiceData.invoice_method
          });
        }

        this.calcSubtotal();
        this.calcAmountDue();
      });
  }

  calcSubtotal() {
    this.subtotal_amount = 0;
    this.invoice_items.map((item: InvoiceItem) => {
      this.subtotal_amount += item.amount;
    });

    this.total_amount = this.subtotal_amount;
  }

  calcValues(item: InvoiceItem) {
    item.amount = item.unit_price * item.quantity;
    item.amount = Number(item.amount);
    this.calcSubtotal();
  }

  calcAmountDue() {
    this.total_amount = this.subtotal_amount;
    const discount = this.editInvoiceForm.controls['discount'].value;
    if (discount) {
      this.total_amount = this.subtotal_amount - (this.subtotal_amount * discount) / 100;
    }
    this.total_amount = Number(this.total_amount);
    this.editInvoiceForm.controls.total_amount.setValue(this.total_amount);
    return this.total_amount;
  }

  addNewItem() {
    if (this.invoice_items.length < 9) {
      const invoiceItem: InvoiceItem = { description: '', amount: 0.0, quantity: 1, unit_price: 0.0 };
      this.invoice_items.push(invoiceItem);
    }
  }

  removeItem(item: InvoiceItem, index) {
    this.invoice_items.splice(index, 1);
  }

  saveInvoice(status?: string) {
    const data = this.editInvoiceForm.value;

    const invoice = new Invoice(data);
    invoice.ref = this.invoice.ref;
    invoice.user_id = this.invoice.user_id;
    invoice.items = this.invoice_items;

    if (status) {
      invoice.status = status;
    }

    invoice.created_at = this.invoice.created_at;

    // find selected client
    this.selected_client = this.clients.filter((client: Client) => client.ref === invoice.client_id)[0];
    // add client name
    invoice.client = this.selected_client.name;

    this._invoiceService.update(invoice).then(resp => {
      (<any>window).Intercom('trackEvent', 'edited-invoice');

      // sent invoice
      if (status === 'sent') {
        invoice.date_send = this._invoiceService.serverTime;

        // send invoice data with email
        this._emailInvoice(invoice);
      }

      this.router.navigate(['/invoices']);
    });
  }

  onHide(client: Client) {
    this.editInvoiceForm.controls.client_id.setValue(client.ref);
    this.showCreateClient = false;
  }

  // tslint:disable-next-line:no-shadowed-variable
  checkOnInput(element, changeSize: boolean = true) {
    const valueLength = element.target.value.length;

    if (changeSize === true) {
      switch (true) {
        case valueLength > 6 && valueLength < 10:
          this.fontSize = '0.9em';
          break;
        case valueLength >= 10:
          this.fontSize = '0.7em';
          break;
        default:
          this.fontSize = '1.2em';
      }
    }

    if (element.target.value < 0) {
      element.target.value = 0;
      return false;
    }
  }

  private _emailInvoice(invoice: Invoice) {
    if (this.selected_client) {
      this._cloudFunctions.sendEmail(this.selected_client.email, invoice);
      this.toastr.success('Your invoice has been emailed to ' + this.selected_client.email, '', TOAST_POSITION);
      (<any>window).Intercom('trackEvent', 'sent-invoice');
    }
  }
}
