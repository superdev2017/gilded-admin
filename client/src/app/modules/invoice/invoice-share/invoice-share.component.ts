import { Component, OnDestroy, OnInit } from '@angular/core';
import { InvoiceService } from 'app/modules/invoice/services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/pluck';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../models/invoice.model';
import { Subscription } from 'rxjs/Subscription';

declare var html2canvas, pdfMake;

@Component({
  selector: 'invoice-share',
  templateUrl: './invoice-share.component.html',
  styleUrls: ['./invoice-share.component.scss']
})
export class InvoiceShareComponent implements OnInit, OnDestroy {
  invoice: Observable<Invoice>;
  invoiceSubShare: Subscription;
  tax_value = 0.25;
  showPayNowModal = false;
  hasInvoice = true;

  constructor(private _invoiceService: InvoiceService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.invoiceSubShare = this.activatedRoute.params.pluck('id').subscribe(invoice_doc => {
      this._loadInvoice(invoice_doc);
    });
  }

  ngOnDestroy() {
    this.invoiceSubShare.unsubscribe();
  }

  private _loadInvoice(invoice_doc) {
    this.invoice = this._invoiceService.fetchInvoice(invoice_doc).map(invoices => {
      if (invoices.length === 0) {
        this.hasInvoice = false;
      }
      return invoices.length > 0 ? invoices[0] : undefined;
    });
  }

  printInvoice() {
    html2canvas(document.getElementById('print-invoice'), {
      onrendered: function(canvas) {
        const data = canvas.toDataURL();
        const docDefinition = {
          content: [
            {
              image: data,
              width: 500
            }
          ]
        };
        pdfMake.createPdf(docDefinition).download('invoice.pdf');
      }
    });
  }

  cancelPrint() {
    this.router.navigate(['/invoices']).then();
  }

  getStatus(status: string) {
    return Invoice.statuses[status];
  }

  payNow() {
    this.showPayNowModal = true;
  }
}
