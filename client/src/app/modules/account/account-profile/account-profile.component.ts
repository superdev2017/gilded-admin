import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from 'app/modules/auth/services/auth.service';
import { User } from 'app/shared/models';
import { UserService } from 'app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CloudUser } from 'app/shared/models/user.model';
import { ToastService } from 'app/typescripts/pro/alerts';

const TOAST_POSITION = { positionClass: 'toast-bottom-right' };

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent implements OnInit, OnDestroy {
  @ViewChild('userPhoto') userPhoto: any;

  user: User = new User({ photo: '/assets/images/no-avatar.png' });
  cleanUser: User;
  cloudUser: CloudUser;
  userSubscription: Subscription;
  newPassword: string;
  confirmPassword: string;
  showPasswordProvider = false;

  edit: any = {
    username: false,
    name: false,
    email: false,
    photo: false
  };

  hasPasswordProvider = false;

  constructor(
    private route: ActivatedRoute,
    private _authService: AuthService,
    private _userService: UserService,
    private toastr: ToastService
  ) {}

  ngOnInit() {
    this.userSubscription = this._authService.auth.subscribe((cloudUser: CloudUser) => {
      if (undefined !== cloudUser) {
        this.cloudUser = cloudUser;
        this.hasPasswordProvider = cloudUser.providers.indexOf('password') > 0 ? true : false;
        this._loadData(cloudUser);
      }
    });
  }

  _loadData(cloudUser: CloudUser) {
    if (cloudUser) {
      this._userService.currentUser.map(user => (this.user = user)).subscribe(user => {
        this.user.photo = this.user.photo ? this.user.photo : cloudUser.photoURL;
      });
    }
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  userPhotoChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (events: any) => {
        this.user.photo = events.target.result;
        this.saveValue('photo');
      };

      reader.readAsDataURL(event.target.files[0]);

      (<any>window).Intercom('trackEvent', 'uploaded-logo');
    }
  }

  editMode(control: string) {
    this.edit[control] = !this.edit[control];
    this.cleanUser = Object.assign({}, this.user);
  }

  cancelValue(control: string) {
    this.edit[control] = !this.edit[control];
    this.user = Object.assign({}, this.cleanUser);
  }

  async saveValue(control: string) {
    // validate username and email are unique in our system
    if (control === 'username' || control === 'email') {
      const validateUnique = await this.validateByKey(control);
      if (!validateUnique) {
        return;
      }
    }

    // save new data
    const result = await this._userService.update(this.user);
    if (!result) {
      return false;
    }

    // cleanup
    this.edit[control] = false;
    this.toastr.success('Your ' + control + ' has been updated', '', TOAST_POSITION);
    this.cleanUser = Object.assign({}, this.user);
  }

  validateByKey(key: string): Promise<any> {
    return new Promise(resolve => {
      this._userService
        .fetchByKey(key, this.user[key])
        .map((res: Array<User>) => {
          const foundValue = res.filter(item => item.id !== this.user.id)[0];
          return foundValue;
        })
        .subscribe(resp => {
          if (resp) {
            this.toastr.error(`This ${key} is taken`, '', TOAST_POSITION);
            resolve(undefined);
          } else {
            // this.toastr.success(`${key[0].toUpperCase() + key.substr(1)} has been updated successfully`);
            resolve(true);
          }
        });
    });
  }

  updatePassword() {
    (<any>window).Intercom('trackEvent', 'changed-password');

    this._authService.updateFirebasePassword(this.newPassword).then(
      data => {
        this.toastr.success('Your password has been updated', '', TOAST_POSITION);
      },
      error => {
        this.toastr.error(error.message, '', TOAST_POSITION);
      }
    );
  }
}
