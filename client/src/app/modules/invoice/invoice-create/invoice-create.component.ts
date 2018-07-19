import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from 'app/modules/invoice/services/invoice.service';
import { Invoice, InvoiceItem } from '../models/invoice.model';
import { Observable } from 'rxjs/Observable';
import { Client } from 'app/shared/models/client.model';
import { ClientService } from 'app/shared/services/client.service';
import { CloudUser, User } from 'app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CloudFunctionsService } from 'app/shared/services/cloud-functions.service';
import { AuthService } from 'app/modules/auth/services/auth.service';
import { ToastService } from 'app/typescripts/pro/alerts';
import { UserService } from 'app/shared/services/user.service';
import { PaymentService } from 'app/modules/payment/services/payment.service';
import { PaymentOption } from 'app/modules/payment/models/payment-option.model';
import { CryptoService } from 'app/shared/services/crypto.service';

const TOAST_OPTIONS = { positionClass: 'toast-bottom-right', toastClass: 'g-toast' };
const INVOICE_MIN_NUMBER = 105;
const INVOICE_MAX_NUMBER = 500;
const LABEL_ADD_CONTACT = '+ ADD NEW CONTACT';

declare var window;

@Component({
  selector: 'invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss']
})
export class InvoiceCreateComponent implements OnInit, OnDestroy {
  invoiceForm: FormGroup;
  invoice_number: number;
  invoice_status: string;
  invoice_items: Array<InvoiceItem> = [];

  clients: Observable<Client[]>;
  clientsList: Array<Client>;
  selected_client: Client;

  currentUser: User;
  currencyOptions: Array<any>;

  showCreateClient = false;
  cloudUser: any;
  userSubscription: Subscription;
  subtotal_amount = 0.0;
  total_amount = 0.0;
  invoice_method = 'address'; // default invoice method
  fontSize = '1.2em';
  invoice: Invoice;

  // request model
  request: any;

  constructor(
    private _invoiceService: InvoiceService,
    private _clientService: ClientService,
    private _cloudFunctions: CloudFunctionsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private toastr: ToastService,
    private _userService: UserService,
    private _paymentService: PaymentService,
    private _cryptoService: CryptoService
  ) {
    const newInvoice = new Invoice({ status: 'draft' });
    this.invoice_status = newInvoice.displayStatusName;

    this.invoiceForm = new FormGroup({
      title: new FormControl('', Validators.required),
      client_id: new FormControl('', Validators.required),
      date_due: new FormControl('', Validators.required),
      fiat_currency: new FormControl('', Validators.required),
      notes: new FormControl(''),
      discount: new FormControl(0),
      total_amount: new FormControl(this.total_amount, Validators.required),
      invoice_method: new FormControl('address', Validators.required)
    });

    // attach on changes event
    this.onChanges();
  }

  private _generateRndInvoiceNumber(): number {
    return Math.floor(Math.random() * (INVOICE_MAX_NUMBER - INVOICE_MIN_NUMBER) + INVOICE_MIN_NUMBER);
  }

  ngOnInit() {
    this._userService.currentUser
      .map(user => {
        if (user) {
          this._loadCurrencyOptions(user.id);
        }
        return user;
      })
      .subscribe(user => (this.currentUser = user));

    const data = this.activeRoute.snapshot.data;
    this.userSubscription = data.user.subscribe(cloudUser => {
      if (cloudUser) {
        this.cloudUser = new CloudUser(cloudUser);
        this.clients = this._clientService.fetchByUser(cloudUser.uid).map(respClients => {
          respClients.forEach((client: Client) => {
            client['label'] = client.name + ' <' + client.email + '>';
            client['value'] = client.ref;
            // client['icon'] = client.logo;
          });

          respClients.push(Object.assign(new Client({ label: LABEL_ADD_CONTACT, value: -1 })));
          this.clientsList = respClients;

          return respClients;
        });

        this._loadlastInvoiceNumber();
      }
    });

    const invoiceItem: InvoiceItem = { description: '', amount: 0.0, quantity: 1, unit_price: 0.0 };
    this.invoice_items.push(invoiceItem);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onChanges() {
    this.invoiceForm.controls.client_id.valueChanges.subscribe(val => {
      if (val === -1) {
        this.showCreateClient = true;
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

  _loadlastInvoiceNumber() {
    this._invoiceService
      .fetchLastInvoice(this.cloudUser.uid)
      .map(invoices => invoices[0])
      .subscribe((invoice: Invoice) => {
        if (invoice) {
          this.invoice_number = invoice.invoice_number + 1;
        } else {
          this.invoice_number = this._generateRndInvoiceNumber();
        }
      });
  }

  addNewItem() {
    if (this.invoice_items.length < 9) {
      const invoiceItem: InvoiceItem = { description: '', amount: 0.0, quantity: 0, unit_price: 0.0 };
      this.invoice_items.push(invoiceItem);
    }
  }

  removeItem(item: InvoiceItem, index) {
    this.invoice_items.splice(index, 1);
  }

  calcValues(item: InvoiceItem) {
    item.amount = item.unit_price * item.quantity;
    item.amount = Number(item.amount);
    this.calcSubtotal();
  }

  calcSubtotal() {
    this.subtotal_amount = 0;
    this.invoice_items.map((item: InvoiceItem) => {
      this.subtotal_amount += item.amount;
    });

    this.total_amount = this.subtotal_amount;
  }

  calcAmountDue() {
    const discount = this.invoiceForm.controls['discount'].value;
    this.total_amount = this.subtotal_amount - (this.subtotal_amount * discount) / 100;
    this.total_amount = this.total_amount;
    this.invoiceForm.controls.total_amount.setValue(this.total_amount);
    return this.total_amount;
  }

  createInvoice(status: string) {
    const data = this.invoiceForm.value;

    this.invoice = new Invoice(data);
    this.invoice.items = this.invoice_items;
    this.invoice.invoice_number = this.invoice_number;
    this.invoice.user_id = this.cloudUser.uid;
    this.invoice.status = status;

    // find selected client
    this.selected_client = this.clientsList.filter((client: Client) => client.ref === this.invoice.client_id)[0];
    // add client name
    this.invoice.client = this.selected_client.name;

    // sent invoice
    if (status === 'sent') {
      this.invoice.date_send = this._invoiceService.serverTime;

      if (this.invoice.invoice_method === 'requestnetwork') {
        return this.startNewRequest(this.invoice);
      }
    }

    // continue normally and store invoice
    this.storeInvoice();
  }

  private storeInvoice() {
    const invoice: Invoice = this.invoice;
    // store invoice
    this._invoiceService.store(invoice).then(invoiceID => {
      invoice.ref = invoiceID;

      (<any>window).Intercom('trackEvent', 'created-invoice');

      // send email to client
      if (status === 'sent') {
        this._emailInvoice(invoice);
      }

      this.router.navigate(['/invoices', 'view', invoiceID]);
    });
  }

  onHide(client: Client) {
    this.invoiceForm.controls.client_id.setValue(client.ref);
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
      this.toastr.success('Your invoice has been emailed to ' + this.selected_client.email, '', TOAST_OPTIONS);
      (<any>window).Intercom('trackEvent', 'sent-invoice');
    }
  }

  private startNewRequest(invoice: Invoice) {
    if (!this.selected_client.eth_address_payment) {
      this.toastr.warning("Contact don't have ETH address registered", 'Gilded Request Network', { toastClass: 'g-toast' });
      return;
    }

    // convert amount to ethereum
    this._cryptoService.convertCurrency(invoice.fiat_currency, 'ETH', invoice.total_amount).subscribe(amount => {
      this.request = {
        payer: this.selected_client.eth_address_payment,
        amount: amount,
        options: { reason: `Request for Invoice No. ${invoice.invoice_number}`, invoice: invoice }
      };
    });
  }

  hideRequestModal(event: any) {
    if (event.step === 3 && event.response) {
      this.toastr.success('Request for Payment has been created!', 'Gilded Request Network', { toastClass: 'g-toast' });
      // store request invoice
      const requestInvoice = event.response.request;

      this.invoice.requestId = requestInvoice.requestId;
      this.invoice.creator = requestInvoice.creator;
      this.invoice.payer = requestInvoice.payer;
      this.invoice.transaction = event.response.transaction.hash;

      // store invoice
      this.storeInvoice();
    }
  }
}
