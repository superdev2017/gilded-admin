import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from 'app/modules/transaction/transaction-list/transaction-list.component';
import { UserResolve } from 'app/shared/resolvers/user.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', resolve: { user: UserResolve }, component: TransactionListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {}
