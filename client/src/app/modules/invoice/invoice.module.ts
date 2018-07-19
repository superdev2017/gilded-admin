import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';

import { InvoiceRoutingModule } from 'app/modules/invoice/invoice-routing.module';
import { InvoiceDashboardComponent } from 'app/modules/invoice/invoice-dashboard/invoice-dashboard.component';
import { InvoiceViewComponent } from 'app/modules/invoice/invoice-view/invoice-view.component';
import { InvoiceShareComponent } from 'app/modules/invoice/invoice-share/invoice-share.component';
import { InvoiceDetailsComponent } from 'app/modules/invoice/invoice-details/invoice-details.component';
import { InvoiceCreateComponent } from 'app/modules/invoice/invoice-create/invoice-create.component';
import { InvoiceService } from 'app/modules/invoice/services/invoice.service';
import { InvoiceEditComponent } from 'app/modules/invoice/invoice-edit/invoice-edit.component';
import { PayNowComponent } from 'app/modals/pay-now/pay-now.component';
import { PaymentService } from 'app/modules/payment/services/payment.service';
import { TransactionModule } from 'app/modules/transaction/transaction.module';

@NgModule({
  imports: [CommonModule, InvoiceRoutingModule, SharedModule, TransactionModule],
  declarations: [
    InvoiceDashboardComponent,
    InvoiceViewComponent,
    InvoiceShareComponent,
    InvoiceDetailsComponent,
    InvoiceCreateComponent,
    InvoiceEditComponent,
    PayNowComponent
  ],
  entryComponents: [PayNowComponent],
  providers: [InvoiceService, PaymentService]
})
export class InvoiceModule {}
