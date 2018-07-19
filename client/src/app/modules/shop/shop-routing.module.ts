import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [{ path: '', component: SearchResultsComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
