import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from 'app/guards/auth.guard';

// Prepare routes for application
const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'complete', component: RegisterComponent, data: { complete: true }, canActivate: [AuthGuard] }
];

export const AuthRouting = RouterModule.forChild(routes);
