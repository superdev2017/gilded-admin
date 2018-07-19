import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ClientService } from 'app/shared/services/client.service';
import { UserService } from 'app/shared/services/user.service';
import { User, CloudUser, Plan } from 'app/shared/models';
import { Subscription } from 'rxjs/Subscription';
import { Client } from 'app/shared/models/client.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { CryptoService } from 'app/shared/services/crypto.service';

// declare swal global var
declare var swal;

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {
  @ViewChild('contactsTable') table: any;
  rows: Observable<Client[]>;
  contactSubscription: Subscription;
  showCreateContact = false;
  cloudUser: CloudUser;
  editMode = false;
  user: User;

  constructor(
    private _clientService: ClientService,
    private _userService: UserService,
    private route: ActivatedRoute,
    private loadingSpinner: LoadingBarService,
    private _cryptoService: CryptoService
  ) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.contactSubscription = data.user.map(user => (this.cloudUser = user)).subscribe(() => this._loadData());
  }

  ngOnDestroy(): void {
    this.contactSubscription.unsubscribe();
  }

  private _loadData() {
    this._userService.currentUser.map(user => (this.user = user)).subscribe();

    if (this.cloudUser) {
      this.rows = this._clientService.fetchByUser(this.cloudUser.uid);
    }
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  removeContact(row: Client) {
    swal({
      title: row.name,
      html: 'Do you want to remove this contact?',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Yes',
      type: 'warning'
    }).then(isConfirm => {
      if (isConfirm.value) {
        this._clientService.fetchInvoicesByClientId(row.ref).subscribe(response => {
          // check if length > 0 has relation
          if (response.length > 0) {
            swal('Gilded Invoices', 'This contact has relation to invoices. Can not be deleted', 'error');
          } else {
            // delete
            this._clientService.delete(row.ref).then(() => {
              swal('Gilded Contacts', `Contact [${row.name}] successfully deleled!`, 'success');
            });
          }
        });
      }
    });
  }

  editContact(row) {
    this.editMode = true;
  }

  saveContact(row: Client) {
    if (this.user.plan !== Plan.FREE) {
      // todo: validate crypto address
      const cryptoValid = this._cryptoService.validateCryptoWalletAddress(row.eth_address_payment, 'ETH');

      if (cryptoValid === false) {
        swal('Gilded', 'Payment address is not valid', 'error');
        return;
      }
    }

    this._clientService.update(row).then(() => {
      swal('Gilded', 'Contact updated successfully!', 'success');
      this.editMode = false;
    });
  }

  onHideCreateContact(event) {
    this.loadingSpinner.start(0);
    this.showCreateContact = false;
    this._loadData();

    this.rows.subscribe(() => this.loadingSpinner.complete());
  }
}
