import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from 'app/modules/invoice/services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../models/invoice.model';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/shared/services/user.service';
import { User } from 'app/shared/models';

@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  @Input() invoice: Invoice;
  @Input() context: 'share' | 'view';

  invoice_cache: Invoice;
  subtotal_amount = 0.0;
  user: Observable<User>;

  constructor(private _userService: UserService) {}

  ngOnInit() {
    // user details
    this.user = this._userService.fetchOne(this.invoice.user_id);

    // subtotal
    for (const item of this.invoice.items) {
      this.subtotal_amount += item.amount;
    }
  }

  getStatus(status: string) {
    let label = Invoice.statuses[status];
    if (this.context === 'share' && label === 'Sent') {
      label = 'Unpaid';
    }
    return label;
  }
}
