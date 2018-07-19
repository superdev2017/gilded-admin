import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transaction } from '../models/transaction.model';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { CloudUser } from 'app/shared/models/user.model';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnDestroy {
  @ViewChild('transactionsTable') table: any;
  rows: Observable<Transaction[]>;
  user: CloudUser;
  userSubscription: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private _transactionService: TransactionService,
    private loadingSpinner: LoadingBarService
  ) {}

  ngOnInit() {
    const data = this.activeRoute.snapshot.data;
    this.userSubscription = data.user.subscribe(cloudUser => {
      if (cloudUser) {
        this.user = new CloudUser(cloudUser);
        this._loadRows();
      }
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    //
  }

  _loadRows() {
    this.loadingSpinner.start();
    this.rows = this._transactionService.fetchTransactionsByUser(this.user.uid).delay(1000);
    this.rows.subscribe(() => this.loadingSpinner.complete());
  }

  getStatus(status: string) {
    const transaction = new Transaction({ status: status });
    return transaction.displayStatusName;
  }
}
