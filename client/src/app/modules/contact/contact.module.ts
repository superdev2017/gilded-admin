import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, SharedModule],
  declarations: [ContactListComponent]
})
export class ContactModule {}
