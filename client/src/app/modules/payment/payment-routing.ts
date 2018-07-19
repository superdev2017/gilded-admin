import { Routes, RouterModule } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { UserResolve } from '../../shared/resolvers/user.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'options', pathMatch: 'full' },
  { path: 'options', resolve: { user: UserResolve }, component: PaymentListComponent }
];

export const PaymentRouting = RouterModule.forChild(routes);
