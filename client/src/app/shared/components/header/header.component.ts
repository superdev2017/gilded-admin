import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/auth/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { CloudUser } from 'app/shared/models/user.model';
import { User } from 'app/shared/models';
import { UserService } from 'app/shared/services/user.service';
import { Subscription } from 'rxjs/Subscription';

const redirectURL = '/';
const logoutRedirect = '/auth/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() navClass = 'gold';
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  logoPath = 'assets/images/logo.png';
  user: User = new User({ photo: '/assets/images/no-avatar.png' });
  sidebarOpen = false;
  showMenu = true;
  userSubscription: Subscription;

  constructor(private router: Router, private _authService: AuthService, private _userService: UserService) {}

  get isLoggedIn(): Observable<any> {
    return this._authService.currentUser.map(user => {
      return user ? true && this.showMenu : false;
    });
  }

  ngOnInit() {
    this.userSubscription = this._authService.auth.subscribe((connectedUser: CloudUser) => {
      if (connectedUser) {
        // check logged user
        this.showMenu = this.router.url !== '/auth/complete';

        this._userService.fetchOne(connectedUser.uid).subscribe(user => {
          this.user = new User(user);
          this.user.photo = this.user.photo ? this.user.photo : connectedUser.photoURL;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  emitSidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen;
    this.toggleSidebar.emit(this.sidebarOpen);
  }

  isShop() {
    return this.router.url === '/shop';
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }

  signOut() {
    this._authService.signOut().then(() => {
      this.router.navigateByUrl(logoutRedirect);
    });
  }
}
