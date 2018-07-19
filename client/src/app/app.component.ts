import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { MDBSpinningPreloader } from 'app/typescripts/pro';
import { environment } from '../environments/environment';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'app/shared/services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CloudUser } from 'app/shared/models';
import { async } from '@angular/core/testing';

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  navigation: Subscription;
  showGlobalHeader = true;

  constructor(
    private router: Router,
    private mdbSpinningPreloader: MDBSpinningPreloader,
    private _firebaseAuth: AngularFireAuth,
    private _userService: UserService
  ) {
    if (environment.production) {
      this._addGoogleAnalyticsScript();
      this._addIntercomScript();
    }
  }

  private _addGoogleAnalyticsScript() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).gtag('config', 'UA-116389026-1', { page_path: event.urlAfterRedirects });
      }
    });
  }

  private _addIntercomScript() {
    (<any>window).Intercom('boot', {
      app_id: 'ua7tk66u'
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).Intercom('update');
      }
    });
  }

  ngOnInit() {
    this.mdbSpinningPreloader.stop();
    this.navigation = this.router.events.subscribe(event => this._handleNavigationEvent(event));
  }

  ngOnDestroy(): void {
    this.navigation.unsubscribe();
  }

  private _handleNavigationEvent(event) {
    const customHeaderPages = ['/', '/auth/login', '/auth/register', '/auth/complete'];

    if (event instanceof NavigationEnd) {
      if (!customHeaderPages.includes(event.url)) {
        // check if user has registered user account in database
        this._checkUserAccount();
      }

      if (customHeaderPages.indexOf(event.url) > -1 || event.url.indexOf('/invoices/share') > -1) {
        this.showGlobalHeader = false;
      } else {
        this.showGlobalHeader = true;
      }
    }
  }

  private _checkUserAccount() {
    this._firebaseAuth.authState.subscribe(auth => {
      if (auth && auth.uid) {
        this._userService.fetchOne(auth.uid).subscribe(data => {
          if (!data) {
            this.router.navigateByUrl('/auth/complete');
          }
        });
      }
    });
  }
}
