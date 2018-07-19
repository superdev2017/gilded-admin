import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { HomeComponent } from 'app/pages/home.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { PageNotFoundComponent } from 'app/pages/page-not-found/page-not-found.component';
// import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
// import { RequestComponent } from 'app/pages/request/request.component';

// Prepare routes for application
const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  // {path: 'home', component: HomeComponent},
  // {path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'account', loadChildren: './modules/account/account.module#AccountModule', canActivateChild: [AuthGuard] },
  { path: 'invoices', loadChildren: './modules/invoice/invoice.module#InvoiceModule' },
  { path: 'payment', loadChildren: './modules/payment/payment.module#PaymentModule', canActivate: [AuthGuard] },
  // {path: 'shop', loadChildren: './modules/shop/shop.module#ShopModule', canActivate: [AuthGuard]},
  { path: 'transactions', loadChildren: './modules/transaction/transaction.module#TransactionModule', canActivate: [AuthGuard] },
  { path: 'contacts', loadChildren: './modules/contact/contact.module#ContactModule', canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: '**', component: PageNotFoundComponent },


];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  initialNavigation: 'enabled'
});
