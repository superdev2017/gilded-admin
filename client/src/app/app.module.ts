import Raven = require('raven-js');
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';

// modules
import { AppRouting } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ToastModule } from 'app/typescripts/pro/alerts';
import { SharedModule } from './shared/shared.module';

// services
import { AuthService } from 'app/modules/auth/services/auth.service';
import { UserService } from 'app/shared/services/user.service';
import { ClientService } from 'app/shared/services/client.service';
import { CryptoService } from 'app/shared/services/crypto.service';
import { CloudFunctionsService } from 'app/shared/services/cloud-functions.service';
import { CoinmapService } from 'app/shared/services/coinmap.service';

// components
import { HomeComponent } from 'app/pages/home.component';

// environment
import { environment } from 'app/../environments/environment';

// guard
import { AuthGuard } from 'app/guards/auth.guard';
import { AdminGuard } from "./guards/admin.guard"

// resolvers
import { UserResolve } from 'app/shared/resolvers/user.resolver';

// pipes
import { CurrencyPipe } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApiPrefixInterceptor } from './shared/interceptors/api-prefix.interceptor';

// Request Network
import { RequestNetworkService } from 'angular-request-network';

const importModules: any = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebase, environment.app_name),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  AngularFirestoreModule,
  ToastModule.forRoot(),
  SharedModule,
  AppRouting
];

Raven.config('https://1555fb329c7747388547c8bd2a7ae38a@sentry.io/297844').install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    // show errors only in production
    if (environment.production) {
      Raven.captureException(err.originalError || err);
    } else {
      console.error(err);
    }
  }
}

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, DashboardComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  imports: importModules,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    { provide: ErrorHandler, useClass: RavenErrorHandler },
    HttpClient,
    AuthService,
    UserService,
    ClientService,
    AuthGuard,
    AdminGuard,
    UserResolve,
    CryptoService,
    CloudFunctionsService,
    CurrencyPipe,
    CoinmapService,
    RequestNetworkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
