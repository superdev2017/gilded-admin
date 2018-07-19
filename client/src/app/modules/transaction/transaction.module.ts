import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from 'app/modules/transaction/transaction-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { SharedModule } from '../../shared/shared.module';
import { TransactionService } from './services/transaction.service';

@NgModule({
  imports: [CommonModule, SharedModule, TransactionRoutingModule],
  exports: [TransactionListComponent],
  declarations: [TransactionListComponent],
  providers: [TransactionService]
})
export class TransactionModule {}
