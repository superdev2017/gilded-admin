import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceDashboardComponent } from 'app/modules/invoice/invoice-dashboard/invoice-dashboard.component';
import { InvoiceViewComponent } from 'app/modules/invoice/invoice-view/invoice-view.component';
import { InvoiceShareComponent } from 'app/modules/invoice/invoice-share/invoice-share.component';
import { InvoiceCreateComponent } from 'app/modules/invoice/invoice-create/invoice-create.component';
import { InvoiceEditComponent } from 'app/modules/invoice/invoice-edit/invoice-edit.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { UserResolve } from 'app/shared/resolvers/user.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', resolve: { user: UserResolve }, component: InvoiceDashboardComponent, canActivate: [AuthGuard] },
  { path: 'create', resolve: { user: UserResolve }, component: InvoiceCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', resolve: { user: UserResolve }, component: InvoiceEditComponent, canActivate: [AuthGuard] },
  { path: 'view/:id', resolve: { user: UserResolve }, component: InvoiceViewComponent, canActivate: [AuthGuard] },
  { path: 'share/:id', component: InvoiceShareComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
