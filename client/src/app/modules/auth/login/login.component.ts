import { Component, ViewEncapsulation, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'app/shared/models';
import { UserService } from 'app/shared/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateInputTaken } from 'app/shared/validators/input-taken.validator';
import { ToastService } from 'app/typescripts/pro/alerts';

const redirectURL = '/invoices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: any = {
    email: null,
    password: null
  };

  error: any;
  step = 'login';
  resetForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private router: Router,
    public _ngZone: NgZone,
    private toastr: ToastService
  ) {}

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      email: new FormControl('', Validators.required, ValidateInputTaken.existsInDatabase(this._userService, 'email'))
    });
  }

  signWithGoogle() {
    this._authService.signInWithGoogle().then(response => {
      const userInfo = response.additionalUserInfo;

      // check if is new user
      if (userInfo && userInfo.isNewUser === true) {
        const userProfile = userInfo.profile;
        const user = new User({
          id: response.user.uid,
          email: userProfile.email,
          name: userProfile.name,
          photo: userProfile.picture,
          username: this._authService.randomStringPass
        });

        this._userService.store(user);
        this.loadIntercom(user.name, user.email);
      }

      this._ngZone.run(() => this.router.navigateByUrl(redirectURL));
    });
  }

  signInWithEmail() {
    this._authService
      .signInRegular(this.user.email, this.user.password)
      .then(res => {
        this.loadIntercom(res.displayName || res.name, res.email);
        this._ngZone.run(() => this.router.navigateByUrl(redirectURL));
      })
      .catch(err => {
        this.error = err;
      });
  }

  loadIntercom(name: string, email: string) {
    (<any>window).intercomSettings = {
      app_id: 'ua7tk66u',
      name: name, // Full name
      email: email // Email address
    };
  }

  sendResetEmail() {
    if (this.resetForm.valid) {
      const email = this.resetForm.value.email;

      // send reset password
      this._authService
        .sendEmailResetPassword(email)
        .then(resp => {
          this.toastr.success('Please check your email for password reset!', 'Gilded');
        })
        .then(() => {
          this.step = 'login';
        });
    }
  }
}
