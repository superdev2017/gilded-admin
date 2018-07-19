import { Component, EventEmitter, OnInit, Input, Output, ViewChild, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'app/typescripts/free/modals';
import { ClientService } from 'app/shared/services/client.service';
import { Client } from 'app/shared/models/client.model';
import { CryptoService } from 'app/shared/services/crypto.service';
import { UserService } from 'app/shared/services/user.service';
import { User, Plan } from 'app/shared/models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit, OnChanges {
  @Input() show: boolean;
  @Output('onHide') onHide: any = new EventEmitter();
  @ViewChild('side') sideModal: ModalDirective;
  clientForm: FormGroup;
  currentUser: Observable<User>;

  constructor(private _userService: UserService, private _clientService: ClientService, private _cryptoService: CryptoService) {
    this.clientForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      eth_address_id: new FormControl(''),
      eth_address_payment: new FormControl('')
    });
  }

  ngOnInit() {
    this.currentUser = this._userService.currentUser;
  }

  ngOnChanges() {
    if (this.show === true) {
      this.sideModal.show();

      // handle onHide event
      this.sideModal.onHide.subscribe(() => {
        this.show = false;
        this.onHide.emit(false);
      });
    }
  }

  saveClient(user: User) {
    const formValue = this.clientForm.value;
    const client = new Client(formValue);
    client.user_id = user.id;
    client.logo = 'assets/images/no-avatar.png';
    client.active = true;

    if (client.eth_address_payment !== '' && user.plan !== Plan.FREE) {
      // validate crypto hash address
      const cryptoValid = this._cryptoService.validateCryptoWalletAddress(client.eth_address_payment, 'ETH');

      if (cryptoValid === false) {
        this.clientForm.get('eth_address_payment').setErrors({
          validation: 'Payment address is not valid'
        });

        return;
      }
    }

    // store to db and hide modal
    this.sideModal.hide();

    // store to db
    this._clientService.store(client).then(() => {
      this.clientForm.reset();
      this.show = false;
      this.onHide.emit(client);
    });
  }
}
