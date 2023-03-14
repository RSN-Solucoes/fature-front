import { CardPaymentModule } from './card-payment/card-payment.module';
import { ProductsServicesFormModule } from './products-services/products-services-form/products-services-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interceptors
import { HeaderInterceptor } from '../core/interceptors/header.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Modules
import { SharedModule } from './../shared/shared.module';
import { ClientsFormModule } from './clients/clients-form/clients-form.module';
import { ClientsListModule } from './clients/clients-list/clients-list.module';
import { RecurrenceListModule } from './recurrence/recurrence-list/recurrence-list.module';
import { InvoicesListModule } from './invoices/invoices-list/invoices-list.module';
import { ProductsServicesListModule } from './products-services/products-services-list/products-services-list.module';
import { TransfersModule } from './transfers/transfers.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SettingsModule } from './settings/settings.module';
import { InvoiceFormModule } from './invoices/invoice-form/invoice-form.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientsListModule,
    ClientsFormModule,
    ProductsServicesListModule,
    RecurrenceListModule,
    InvoicesListModule,
    TransfersModule,
    LoginModule,
    DashboardModule,
    ProductsServicesFormModule,
    SettingsModule,
    InvoiceFormModule,
    CardPaymentModule,
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ]
})
export class ModulesModule { }
