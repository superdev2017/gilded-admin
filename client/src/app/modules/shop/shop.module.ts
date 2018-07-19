import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncatePipe } from 'app/pipes/truncate.pipe';

import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './services/search.service';

// routing
import { ShopRoutingModule } from 'app/modules/shop/shop-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, ShopRoutingModule, NgxPaginationModule],
  declarations: [SearchResultsComponent, TruncatePipe],
  providers: [SearchService]
})
export class ShopModule {}
