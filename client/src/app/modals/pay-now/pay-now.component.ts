import { Component, OnInit, Input, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'app/typescripts/free/modals';
import { PaymentOption } from 'app/modules/payment/models/payment-option.model';
import { Invoice } from 'app/modules/invoice/models/invoice.model';
import { CryptoService } from 'app/shared/services/crypto.service';
import { copyToClipboard } from 'app/functions/copyToClipboard';
import { ToastService } from 'app/typescripts/pro/alerts';
import { Transaction } from 'app/modules/transaction/models/transaction.model';
import { TransactionService } from 'app/modules/transaction/services/transaction.service';
import { InvoiceService } from 'app/modules/invoice/services/invoice.service';
import { PaymentService } from 'app/modules/payment/services/payment.service';

declare var $, brainblocks, swal;

@Component({
  selector: 'pay-now',
  templateUrl: './pay-now.component.html',
  styleUrls: ['./pay-now.component.scss']
})
export class PayNowComponent implements OnInit, OnChanges {
  @ViewChild('payNowModal') payNowModal: ModalDirective;

  @Input() invoice: Invoice;
  @Input() show: boolean;
  @Output() onHide: any = new EventEmitter();

  step = 1;
  selected_currency_code = '';
  selected_currency = '';
  selected_currency_icon = '';
  selected_txhash;
  selected_price = 0.0;
  selected_transaction_id = '';
  selected_exchange_rate = 0.0;

  payNowFrom: FormGroup;
  paymentOptions: Array<PaymentOption>;
  title = 'How would you like to pay?';
  cryptoExhange: Array<any> = [];
  cryptoPrices: Array<any> = [];
  cryptoImagePath = 'assets/images/currencies/32/color/';

  paymentLoading = false;
  paymentType = 'normal'; // normal | crypto

  constructor(
    private _paymentService: PaymentService,
    private _cryptoService: CryptoService,
    private _transactionService: TransactionService,
    private _invoiceService: InvoiceService,
    private toastService: ToastService
  ) {
    this.payNowFrom = new FormGroup({
      currency: new FormControl('', Validators.required),
      public_key: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    const invoice: Invoice = this.invoice;

    if (invoice) {
      this.loadInvoiceData(invoice);
    }
  }

  loadInvoiceData(invoice: Invoice) {
    this.paymentType = ['BTC', 'ETH'].includes(invoice.fiat_currency) ? 'crypto' : 'normal';

    this._cryptoService
      .fetchCryptoValues(invoice.fiat_currency)
      .map(exchanges => {
        Object.keys(exchanges).forEach(exchange => {
          const exchange_rate = exchanges[exchange];
          const item = invoice.total_amount * exchange_rate;
          this.cryptoPrices[exchange] = item;
          this.cryptoExhange[exchange] = exchange_rate;
        });
      })
      .subscribe();

    // load payment options
    this._paymentService.fetchPaymentOptions(invoice.user_id).subscribe((paymentOptions: Array<PaymentOption>) => {
      this.paymentOptions = paymentOptions;

      // find current payment option and pay with it
      if (this.paymentType === 'crypto') {
        const selectedPaymentOption = paymentOptions.filter(pOption => pOption.currency === invoice.fiat_currency)[0];

        if (selectedPaymentOption) {
          this.step = 2;
          this.payWith(selectedPaymentOption);
        } else {
          this.paymentType = 'normal'; // in case of not found current address
        }
      }
    });
  }

  ngOnChanges() {
    if (this.show === true) {
      this.payNowModal.show();

      // handle onHide event
      this.payNowModal.onHide.subscribe(() => {
        this.show = false;
        this.onHide.emit(false);
      });
    }
  }

  showStep1() {
    this.step = 1;
    this.title = 'How would you like to pay?';
  }

  showStep2() {
    this.step = 2;
    this.title = `<img src="${this.selected_currency_icon}"/> Pay with ${this.selected_currency}`;
  }

  showStepNano() {
    this.step = 3;
    // show brain blocks button
    this.showBrainBlocksButton();
  }

  /**
   * Choose the payment method
   * @param paymentOption
   */
  payWith(paymentOption: PaymentOption) {
    this.selected_currency_code = paymentOption.currency;
    this.selected_price = this.cryptoPrices[this.selected_currency_code];
    this.selected_currency = paymentOption.currency_name;
    this.selected_currency_icon = `${this.cryptoImagePath}${paymentOption.icon}.png`;
    this.selected_txhash = this.paymentOptions.filter(item => item.currency === this.selected_currency_code)[0].public_key;
    this.selected_exchange_rate = this.cryptoExhange[this.selected_currency_code];

    if (this.selected_currency_code === 'XRB') {
      this.showStepNano();
    } else {
      this.showStep2();
    }
  }

  showBrainBlocksButton() {
    $('#nano-button').empty();

    setTimeout(() => {
      brainblocks.Button.render(
        {
          // Pass in payment options
          payment: {
            destination: this.selected_txhash,
            currency: 'rai', // this.currentInvoice.fiat_currency.toLowerCase(),
            amount: 1000 * 1000 * this.selected_price
          },

          // Handle successful payments
          onPayment: data => {
            // console.log('Payment successful!', data.token);
            this.selected_transaction_id = data.token;

            // call complete payment
            this.completePayment('confirmed');
          }
        },
        '#nano-button'
      );
    }, 500);
  }

  copyAmount(value) {
    copyToClipboard(value);
    this.toastService.success('Amount copied to clipboard');
  }

  copyHash(value) {
    copyToClipboard(value);
    this.toastService.success("Recipient's wallet address copied to clipboard");
  }

  completePayment(statusInvoice: string = 'pending') {
    this.paymentLoading = true;

    // todo: save transaction and change invoice status
    const transaction = new Transaction({
      transaction_id: this.selected_transaction_id,
      invoice_user_id: this.invoice.user_id,
      invoice_ref: this.invoice.ref,
      invoice_number: this.invoice.invoice_number,
      fiat_currency: this.invoice.fiat_currency,
      fiat_amount: this.invoice.total_amount,
      paid_currency: this.selected_currency_code,
      paid_amount: this.selected_price,
      exchange_rate: this.selected_exchange_rate,
      paid_time: this._transactionService.serverTime,
      status: 'success'
    });

    // save new transaction
    this._transactionService.store(transaction).then(resp => {
      // update invoice
      this.invoice.transaction_id = resp; // assign transaction id
      this.invoice.status = statusInvoice;
      this.invoice.date_paid = this._invoiceService.serverTime;
      this._invoiceService.update(this.invoice).then(() => {
        // register this payment
        swal({
          type: 'success',
          html: `<h4>Thanks for your payment</h4>
          <p class="mt-5 small">
            <a target="_blank" href="https://en.wikipedia.org/wiki/Cryptocurrency">Learn more about accepting cryptocurrency payments</a>
          </p>
          `
        }).then(() => {
          this.paymentLoading = false;
          this.payNowModal.hide();
        });
      });
    });
  }
}
