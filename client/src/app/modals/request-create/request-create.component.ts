import { Component, OnInit, Input, EventEmitter, Output, ViewChild, OnChanges } from '@angular/core';
import { RequestNetworkService, RequestResponse } from 'angular-request-network';
import { ToastService } from 'app/typescripts/pro/alerts';
import { ModalDirective } from 'app/typescripts/free/modals';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'request-create-modal',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.scss']
})
export class RequestCreateModal implements OnInit, OnChanges {
  @Input() request: any;
  @Output() onHide: any = new EventEmitter();
  @ViewChild('requestCreateModal') requestCreateModal: ModalDirective;

  createLoading = false;
  requestResponse: RequestResponse = new RequestResponse();
  connectedAccount: Observable<any>;

  // action steps
  step = 1;
  title = 'Create new request';
  amount: string;

  constructor(private requestNetworkService: RequestNetworkService, private toastrService: ToastService) {}

  ngOnInit(): void {
    this.connectedAccount = this.requestNetworkService.accountObservable;
  }

  ngOnChanges() {
    if (this.request) {
      this.requestCreateModal.show();

      // handle onHide event
      this.requestCreateModal.onHide.subscribe(() => {
        this.request = undefined;
        // emit data on parent component
        this.onHide.emit({ step: this.step, response: this.requestResponse });
      });
    }
  }

  /**
   * Step 1: Start new request by clicking button Create Invoice
   */
  async createInvoice() {
    this.createLoading = true;
    this.amount = this.request ? this.request.amount.toString() : '0.00';

    // tslint:disable-next-line:max-line-length
    this.requestNetworkService
      .createRequestAsPayee(this.request.payer, this.amount, JSON.stringify(this.request.options), this._callbackRequest)
      .on('broadcasted', response => this._callbackRequest(response))
      .then(
        response => this._callbackForPayment(response), // assign response to variable
        err => this._callbackRequest(err)
      );
  }

  private _callbackForPayment(requestResponse: RequestResponse) {
    this.requestResponse = requestResponse;
    // move to payment step
    this.title = 'Request confirmed successfully';
    this.step = 3;
  }

  /**
   * Step 1: Callback Function
   */
  private _callbackRequest(response: RequestResponse) {
    if (response.transaction) {
      // created transaction
      this.requestResponse['transaction'] = response.transaction;

      // move to step 2: show loading
      this.title = 'Waiting to confirm the request...';
      this.step = 2;
    } else {
      // request.message  | failed
      this._handleRequestErrors(response.message);
    }
  }

  private _handleRequestErrors(message: any) {
    if (message.startsWith('Invalid status 6985')) {
      const responseMessage = this.requestNetworkService.showResponse('Invalid status 6985. User denied transaction.');
      this.showToastr(responseMessage.message, 'RQN Request', 'warning');
    } else if (message.startsWith('Failed to subscribe to new newBlockHeaders')) {
      return;
    } else if (message.startsWith('Returned error: Error: MetaMask Tx Signature')) {
      const responseMessage = this.requestNetworkService.showResponse('MetaMask Tx Signature: User denied transaction signature.');
      this.showToastr(responseMessage.message, 'RQN Request', 'warning');
    } else {
      this.showToastr(message, 'RQN Request', 'error');
    }

    // reset button
    this.createLoading = false;

    // navigate back
    if (this.step > 1) {
      this.step--;
    }
  }

  // After successful request completed
  finishCreateRequest() {
    this.requestCreateModal.hide();
  }

  // Payment Process
  // step 3: After successful request completed show button to payInvoice
  payInvoice() {
    this.step = 4;
    // call payment action (pass request Id as parameter and amount to be paid)
    this.requestNetworkService
      .paymentAction(this.requestResponse.request.requestId, this.amount, this._callbackPayment)
      .on('broadcasted', response => {
        this._callbackPayment(response, 'Payment is being done. Please wait a few moments for it to appear on the Blockchain.');
      })
      .then(
        () => {
          this.step = 5;
          this.toastrService.success('Payment completed', 'RQN Payment');
          this.createLoading = false; // stop loading
        },
        err => {
          this._handlePaymentErrors(err);
        }
      );
  }

  private _callbackPayment(response, msg?) {
    if (response) {
      this.toastrService.success(msg || 'Transaction in progress.', 'RQN Payment');
      // this.loading = response.transaction.hash;
      // this.watchTxHash(this.loading);
    } else if (response.message) {
      this._handlePaymentErrors(response.message);
    }
  }

  private _handlePaymentErrors(message: any) {
    if (message.startsWith('Invalid status 6985')) {
      const responseMessage = this.requestNetworkService.showResponse('Invalid status 6985. User denied transaction.');
      this.showToastr(responseMessage.message, 'RQN Payments', 'warning');
    } else if (message.startsWith('Failed to subscribe to new newBlockHeaders')) {
      return;
    } else if (message.startsWith('Returned error: Error: MetaMask Tx Signature')) {
      const responseMessage = this.requestNetworkService.showResponse('MetaMask Tx Signature: User denied transaction signature.');
      this.showToastr(responseMessage.message, 'RQN Payments', 'warning');
    } else {
      const responseMessage = this.requestNetworkService.showResponse(message);
      this.showToastr(responseMessage.message, 'RQN Payments', 'error');
    }

    // reset button
    this.createLoading = false;

    // navigate back
    if (this.step > 1) {
      this.step--;
    }
  }

  private showToastr(message: string, title: string, type: string) {
    switch (type) {
      case 'info':
        this.toastrService.info(message, title);
        break;
      case 'warning':
        this.toastrService.warning(message, title);
        break;
      case 'success':
        this.toastrService.success(message, title);
        break;
      case 'error':
        this.toastrService.error(message, title);
        break;
    }
  }
}
