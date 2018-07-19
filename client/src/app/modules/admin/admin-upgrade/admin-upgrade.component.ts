import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateInputTaken } from 'app/shared/validators/input-taken.validator';
import { ToastService } from 'app/typescripts/pro/alerts';
import {User} from "../../../shared/models/user.model";


const TOAST_POSITION = { positionClass: 'toast-bottom-right' };

@Component({
  selector: 'admin-upgrade',
  templateUrl: './admin-upgrade.component.html',
  styleUrls: ['./admin-upgrade.component.scss']
})

/**
 * Upgrade user's plan
 */
export class AdminUpgradeComponent implements OnInit {

  user: any = {
    email: null,
    password: null
  };

  /**
   * Errors
   */
  error: any;

  /**
   * Submit form
   */
  resetForm: FormGroup;


  constructor(private _userService: UserService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      email: new FormControl('', Validators.required, ValidateInputTaken.existsInDatabase(this._userService, 'email'))
    });
  }

  /**
   * Upgrade User's plan
   */
  upgradeUserPlan() {
    if (this.resetForm.valid) {

      const email = this.resetForm.value.email;

      let subscriber = this._userService.fetchOneByEmail(email).subscribe((user: any) => {
        user[0].plan = 'paid'


        subscriber.unsubscribe()
        this._userService.update(user[0]).then(res => {
          if(res) {
            this.toastService.success('User\'s plan is upgraded as paid', '', TOAST_POSITION);
          } else {
            this.toastService.error('User\'s plan is not upgraded', '', TOAST_POSITION);
          }
        })

      })
    }

  }

}
