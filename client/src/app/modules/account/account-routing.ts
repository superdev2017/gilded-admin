import { Routes, RouterModule } from '@angular/router';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountLogoComponent } from './account-logo/account-logo.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AccountDashboardComponent },
  { path: 'logo', component: AccountLogoComponent },
  { path: 'profile', component: AccountProfileComponent }
];

export const AccountRouting = RouterModule.forChild(routes);
