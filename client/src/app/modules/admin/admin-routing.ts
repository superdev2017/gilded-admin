import { RouterModule, Routes } from '@angular/router';
import { AdminUpgradeComponent } from "./admin-upgrade/admin-upgrade.component"
import { AuthGuard } from 'app/guards/auth.guard';
import {AdminGuard} from "../../guards/admin.guard";

// Prepare routes for application
const routes: Routes = [
  { path: '', redirectTo: 'upgrade', pathMatch: 'full' },
  { path: 'upgrade', component: AdminUpgradeComponent, canActivate: [AdminGuard] },
];

export const AdminRouting = RouterModule.forChild(routes);
