import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Invoice } from 'app/modules/invoice/models/invoice.model';
import { Observable } from 'rxjs/Observable';
import { InvoiceService } from '../services/invoice.service';
import { PaymentOption } from 'app/modules/payment/models/payment-option.model';
import { PaymentService } from 'app/modules/payment/services/payment.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { copyToClipboard } from 'app/functions/copyToClipboard';
import { environment } from 'environments/environment';

declare var swal, window;

@Component({
  selector: 'invoice-dashboard',
  templateUrl: './invoice-dashboard.component.html',
  styleUrls: ['./invoice-dashboard.component.scss']
})
export class InvoiceDashboardComponent implements OnInit, OnDestroy {
  @ViewChild('invoicesTable') table: any;
  rows: Observable<Invoice[]>;

  user: any;
  userSubscription: Subscription;

  hasLoaded = false;
  paymentOptions: Array<PaymentOption> = [];

  constructor(private _invoiceService: InvoiceService, private _paymentService: PaymentService, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const data = this.activeRoute.snapshot.data;
    this.userSubscription = data.user.subscribe(cloudUser => {
      if (cloudUser) {
        this.user = cloudUser;
        this._loadPaymentOptions();
        this._loadRows();
      }
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  private _loadPaymentOptions() {
    // load payment options
    this._paymentService.fetchPaymentOptions(this.user.uid).subscribe((paymentOptions: Array<PaymentOption>) => {
      this.paymentOptions = paymentOptions;
      this.hasLoaded = true;
    });
  }

  private _loadRows() {
    this.rows = this._invoiceService.fetchByUser(this.user.uid);
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    //
  }

  getStatus(status: string) {
    return Invoice.statuses[status];
  }

  shareInvoice(row) {
    const invoice_id = row.ref;
    const url = `${environment.website}/invoices/share/${invoice_id}`;

    swal({
      title: 'Share Invoice',
      html: `<p class="text-left share-url">${url}</p>`,
      width: 600,
      type: 'info',
      confirmButtonText: 'Copy',
      confirmButtonColor: '#ffa600',
      confirmButtonClass: 'btn btn-rounded btn-primary'
    }).then(result => {
      if (result.value) {
        copyToClipboard(url);
        swal('Copied!', 'Shared URL has been saved in your clipboard', 'success');
      }
    });
  }

  getCellClass({ row, column, value }): any {
    return {
      'text-right': column.prop === 'total_amount'
    };
  }
}
