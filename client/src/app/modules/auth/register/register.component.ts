import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/modules/auth/services/auth.service';
import { User, CloudUser } from 'app/shared/models';
import { UserService } from 'app/shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidateInputTaken } from 'app/shared/validators/input-taken.validator';
import { ToastService } from 'app/typescripts/pro/alerts';

declare var swal;
const redirectURL = '/invoices';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: any = [];

  user: User;
  additionalUserInfo: { isNewUser: boolean; profile: any; providerId: string };
  isGoogleAccount = false;
  title = 'Sign Up';

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _ngZone: NgZone,
    private router: Router,
    private toastr: ToastService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl('', Validators.required, ValidateInputTaken.createValidator(this._userService, 'username')),
      email: new FormControl(
        { value: '', disabled: this.isGoogleAccount },
        Validators.required,
        ValidateInputTaken.createValidator(this._userService, 'email')
      )
    });

    if (!this.isGoogleAccount) {
      const passwordControl: FormControl = new FormControl('', Validators.required);
      this.registerForm.addControl('password', passwordControl);
    } else {
      this._checkGoogleUser();
    }
  }

  private _checkGoogleUser() {
    this.title = 'Complete Signup';
    const routeData = this.activeRoute.snapshot.data;

    if (routeData.complete) {
      this._authService.auth.map(response => {
        if (response) {
          this.setUserValues(response);
        }
      });
    }
  }

  setUserValues(signedUser: CloudUser) {
    this.isGoogleAccount = true;

    this.user = new User({
      id: signedUser.uid,
      name: signedUser.displayName,
      email: signedUser.email,
      photo: signedUser.photoURL
    });

    this.registerForm.controls['name'].setValue(this.user.name);
    this.registerForm.controls['email'].setValue(this.user.email);
    this.registerForm.get('email').disable({ onlySelf: true });
    // remove password from form group
    this.registerForm.removeControl('password');

    const firebaseDocId = this.user.id;
  }

  signUpWithGoogle() {
    this._authService.signInWithGoogle().then((response: any) => {
      this.additionalUserInfo = response.additionalUserInfo;

      this._ngZone.run(() => {
        if (this.additionalUserInfo && this.additionalUserInfo.isNewUser === false) {
          this.errors = ['This user has been registered before'];

          swal({
            title: 'You already have an account',
            text: 'You are already logged in with Google. Would you like to continue with this account?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Go to Account',
            cancelButtonText: 'New Account',
            footer: '&copy Gilded 2018'
          }).then(result => {
            if (result.value) {
              this.router.navigate([redirectURL]);
            } else {
              this.errors = undefined;
              this._authService.signOut().then(() => {
                this.router.navigate(['/auth/register']);
              });
            }
          });
        } else {
          // fill data from google authentication
          this.setUserValues(this._authService.cloudUser);
        }
      });
    });
  }

  storeFirebaseUser(email: string, password: string) {
    this._authService.signUpWithEmailPassword(email, password).catch(error => {
      // show error message
      this.toastr.error(error.message);
    });
  }

  registerAccount() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;
      const userID = this.user ? this.user.id : null;
      const userPhoto = this.user ? this.user.photo : 'assets/images/no-avatar.png';

      // initiate new user from model
      const user = new User({
        id: userID,
        photo: userPhoto,
        name: formValues.name,
        username: formValues.username,
        email: formValues.email ? formValues.email : this.user.email
        // website: formValues.website
      });

      if (this.isGoogleAccount === false) {
        // register with email | password
        this._authService
          .signUpWithEmailPassword(formValues.email, formValues.password)
          .then(value => {
            user.id = value.uid;

            // register account in users database
            this.storeNewAccount(user);
          })
          .catch(error => {
            // show error message
            this.toastr.error(error.message);
          });
      } else {
        // register account in users database
        this.storeNewAccount(user);
      }
    }
  }

  storeNewAccount(user: User) {
    this._userService.store(user).then(response => {
      this.loadIntercom(user.name, user.email);
      this.router.navigate([redirectURL]);
    });
  }

  loadIntercom(name: string, email: string) {
    (<any>window).intercomSettings = {
      app_id: 'ua7tk66u',
      name: name, // Full name
      email: email // Email address
    };
  }

  signOut(): Promise<any> {
    return this._authService.signOut().then(() => {
      this.router.navigateByUrl('/');
    });
  }

  signIn() {
    this.signOut().then(() => {
      this.router.navigateByUrl('/auth/login');
    });
  }
}
