import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'app/typescripts/free/index';
import { MDBBootstrapModulePro, MDBSpinningPreloader } from 'app/typescripts/pro/index';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';

// components
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { FooterComponent } from 'app/shared/components/footer/footer.component';

// modals
import { CreateClientComponent } from '../modals/create-client/create-client.component';
import { RequestCreateModal } from 'app/modals/request-create/request-create.component';
import { QRCodeModule } from 'angularx-qrcode';

// pipes
import { FilterPipe } from 'app/pipes/filter.pipe';
import { CurrencyGPipe } from 'app/pipes/currencyG.pipe';

const importModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MDBBootstrapModule.forRoot(),
  MDBBootstrapModulePro.forRoot(),
  NgxDatatableModule,
  QRCodeModule,
  LoadingBarModule.forRoot(),
  LoadingBarRouterModule,
  LoadingBarHttpModule
];

const exportModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MDBBootstrapModule,
  MDBBootstrapModulePro,
  NgxDatatableModule,
  LoadingBarModule,
  LoadingBarRouterModule,
  LoadingBarHttpModule,

  // components
  HeaderComponent,
  FooterComponent,
  QRCodeModule,
  CreateClientComponent,
  RequestCreateModal,

  // pipes
  FilterPipe,
  CurrencyGPipe
];

@NgModule({
  imports: importModules,
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    CreateClientComponent,
    RequestCreateModal,

    // pipes
    FilterPipe,
    CurrencyGPipe
  ],
  entryComponents: [CreateClientComponent],
  exports: exportModules,
  providers: [MDBSpinningPreloader]
})
export class SharedModule {}
