import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from "./admin-routing"
import { AdminUpgradeComponent } from './admin-upgrade/admin-upgrade.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    SharedModule
  ],
  declarations: [AdminUpgradeComponent]
})
export class AdminModule { }
