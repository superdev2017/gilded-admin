import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PaymentOption } from '../models/payment-option.model';
import { PaymentService } from '../services/payment.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { copyToClipboard } from 'app/functions/copyToClipboard';
import { CloudUser } from 'app/shared/models';
import { ToastService } from 'app/typescripts/pro/alerts';

declare var swal;
const TOAST_POSITION = { positionClass: 'toast-bottom-right' };
@Component({
  selector: 'payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit, OnDestroy {
  @ViewChild('paymentOptionsTable') table: any;
  rows: Observable<PaymentOption[]>;
  paymentSubscription: Subscription;
  cloudUser: CloudUser;
  showPaymentOptionModal = false;

  constructor(private _paymentService: PaymentService, private activeRoute: ActivatedRoute, private toastr: ToastService) {}

  ngOnInit() {
    const data = this.activeRoute.snapshot.data;

    this.paymentSubscription = data.user.subscribe((cloudUser: CloudUser) => {
      if (cloudUser) {
        this._loadPaymentOptions(cloudUser);
      }
    });
  }

  ngOnDestroy() {
    this.paymentSubscription.unsubscribe();
  }

  _loadPaymentOptions(cloudUser: any) {
    if (cloudUser) {
      this.cloudUser = cloudUser;
      this.rows = this._paymentService.fetchPaymentOptions(cloudUser.uid);
    }
  }

  addNewOption() {
    this.showPaymentOptionModal = !this.showPaymentOptionModal;
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  removeOption(row: PaymentOption) {
    swal({
      title: 'Remove wallet',
      text: `Do you want to remove your ${row.currency_name} wallet?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, please'
    }).then(isConfirm => {
      if (isConfirm.value) {
        this._paymentService.removePaymentOption(row);
      }
    });
  }

  copyAddress(address_hash: string) {
    copyToClipboard(address_hash);
    this.toastr.info('Public Wallet Address Copied', '', TOAST_POSITION);
  }
}
