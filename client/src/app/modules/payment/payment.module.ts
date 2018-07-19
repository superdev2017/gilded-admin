import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentRouting } from './payment-routing';
import { PaymentService } from './services/payment.service';
import { SharedModule } from 'app/shared/shared.module';
import { PaymentNewComponent } from 'app/modals/payment-new/payment-new.component';

@NgModule({
  imports: [CommonModule, PaymentRouting, SharedModule],
  entryComponents: [PaymentNewComponent],
  declarations: [PaymentListComponent, PaymentNewComponent],
  providers: [PaymentService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PaymentModule {}
