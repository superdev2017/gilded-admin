import { NgModule } from '@angular/core';

import { AccountLogoComponent } from './account-logo/account-logo.component';
import { SharedModule } from 'app/shared/shared.module';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountRouting } from './account-routing';

@NgModule({
  imports: [AccountRouting, SharedModule],
  declarations: [AccountLogoComponent, AccountProfileComponent, AccountDashboardComponent]
})
export class AccountModule {}
