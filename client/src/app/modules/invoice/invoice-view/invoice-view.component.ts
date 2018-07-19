import { Component, OnDestroy, OnInit } from '@angular/core';
import { InvoiceService } from 'app/modules/invoice/services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/pluck';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../models/invoice.model';
import { Subscription } from 'rxjs/Subscription';
import { copyToClipboard } from 'app/functions/copyToClipboard';
import { environment } from 'environments/environment';

declare var html2canvas, pdfMake, swal;

@Component({
  selector: 'invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.scss']
})
export class InvoiceViewComponent implements OnInit, OnDestroy {
  invoice: Observable<Invoice>;
  invoiceID: string;
  invoiceSubView: Subscription;
  tax_value = 0.25;

  constructor(private _invoiceService: InvoiceService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.invoiceSubView = this.activatedRoute.params.pluck('id').subscribe(invoice_doc => this._loadInvoice(invoice_doc));
  }

  ngOnDestroy() {
    this.invoiceSubView.unsubscribe();
  }

  private _loadInvoice(invoice_doc) {
    this.invoice = this._invoiceService.fetchInvoice(invoice_doc).map(invoices => (invoices.length > 0 ? invoices[0] : undefined));
    this.invoiceID = invoice_doc;
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

  shareInvoice() {
    const url = `${environment.website}/invoices/share/${this.invoiceID}`;

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

  backToList() {
    this.router.navigate(['/invoices']).then();
  }

  getStatus(status: string) {
    return Invoice.statuses[status];
  }
}
