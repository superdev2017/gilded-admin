import { Component, OnInit, Input, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'app/typescripts/free/modals';
import { PaymentOption } from 'app/modules/payment/models/payment-option.model';
import { PaymentService } from 'app/modules/payment/services/payment.service';
import { CloudUser } from 'app/shared/models';
import { CryptoService } from 'app/shared/services/crypto.service';
import * as _ from 'lodash';

declare var swal;

@Component({
  selector: 'payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.scss']
})
export class PaymentNewComponent implements OnInit, OnChanges {
  @ViewChild('paymentOptionModal') optionModal: ModalDirective;
  @Input() show: boolean;
  @Input() cloudUser: CloudUser;
  @Output() onHide: any = new EventEmitter();

  paymentOptionForm: FormGroup;
  paymentOptions: Array<any>;
  userPaymentOptions: Array<any>;
  missingPaymentOptions: Array<any>;

  constructor(private _paymentService: PaymentService, private _cryptoService: CryptoService, private router: Router) {
    this.paymentOptions = [
      { label: 'Bitcoin', value: 'BTC', currency: 'BTC', icon: 'assets/images/currencies/32@2x/color/btc@2x.png' },
      // { label: 'Bitcoin Cash', value: 'BCH', currency: 'BCH', icon: 'assets/images/currencies/32@2x/color/bch@2x.png' },
      { label: 'Ethereum', value: 'ETH', currency: 'ETH', icon: 'assets/images/currencies/32@2x/color/eth@2x.png' },
      { label: 'Litecoin', value: 'LTC', currency: 'LTC', icon: 'assets/images/currencies/32@2x/color/ltc@2x.png' },
      { label: 'Nano', value: 'XRB', currency: 'XRB', icon: 'assets/images/currencies/32@2x/color/xrb@2x.png' }
    ];

    this.paymentOptionForm = new FormGroup({
      currency: new FormControl('', Validators.required),
      public_key: new FormControl('', Validators.required)
    });
  }

  ngOnChanges() {
    if (this.show === true) {
      this.optionModal.show();

      // handle onHide event
      this.optionModal.onHide.subscribe(() => {
        this.show = false;
        this.onHide.emit(false);
      });
    }
  }

  ngOnInit() {
    // load payment options
    this._paymentService.fetchPaymentOptions(this.cloudUser.uid).subscribe(paymentOptions => {
      if (paymentOptions && paymentOptions.length > 0) {
        this.userPaymentOptions = paymentOptions;
        this.missingPaymentOptions = this.diffPaymentOptionsArray();
      } else {
        this.missingPaymentOptions = this.paymentOptions;
      }
    });
  }

  diffPaymentOptionsArray(): Array<any> {
    const missingOptions = _.differenceBy(this.paymentOptions, this.userPaymentOptions, 'currency');
    return missingOptions;
  }

  onSubmit() {
    const paymentOption = new PaymentOption(this.paymentOptionForm.value);
    paymentOption.created_at = this._paymentService.serverTime;
    paymentOption.user_id = this.cloudUser.uid;
    paymentOption.icon = paymentOption.currencyIcon();
    paymentOption.currency_name = paymentOption.currencyName();

    const isValidCryptoAddress = this._cryptoService.validateCryptoWalletAddress(paymentOption.public_key, paymentOption.currency);

    if (isValidCryptoAddress) {
      this.optionModal.hide();
      this.show = false;
      this.onHide.emit(false);

      this._paymentService.storePaymentOption(paymentOption).then(() => {
        this.paymentOptionForm.reset();

        // show this the first time a payment option is saved
        if (this.userPaymentOptions.length === 1) {
          swal({
            title: 'Wallet saved!',
            text: 'Would you like to create your first invoice now?',
            type: 'success',
            showCancelButton: true,
            confirmButtonText: 'Create invoice',
            cancelButtonText: 'Add another wallet'
          }).then(isConfirm => {
            if (isConfirm.value) {
              this.router.navigateByUrl('/invoices/create');
            }
          });
        }

        (<any>window).Intercom('trackEvent', 'added-wallet');
      });
    } else {
      this.paymentOptionForm.get('public_key').setErrors({
        validation: 'Whoops, this wallet address is not valid'
      });
    }
  }
}
