import { NgModule } from '@angular/core';
import { AuthRouting } from 'app/modules/auth/auth-routing';
import { LoginComponent } from 'app/modules/auth/login/login.component';
import { RegisterComponent } from 'app/modules/auth/register/register.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [AuthRouting, SharedModule],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule {}
