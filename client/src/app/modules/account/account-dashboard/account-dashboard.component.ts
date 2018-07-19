import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { CloudUser } from 'app/shared/models';
import { AuthService } from 'app/modules/auth/services/auth.service';

@Component({
  selector: 'account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountDashboardComponent implements OnInit, OnDestroy {
  user: CloudUser;
  userSubscription: Subscription;
  user_avatar = '/assets/images/no-avatar.png';

  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit() {
    this.userSubscription = this._authService.auth.subscribe((connectedUser: CloudUser) => {
      this.user = new CloudUser(connectedUser);
      if (this.user.photoURL) {
        this.user_avatar = this.user.photoURL;
      }
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  signOut() {
    this._authService.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
