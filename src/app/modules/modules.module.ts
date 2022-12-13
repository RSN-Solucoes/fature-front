import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { ServicesFormModule } from './products-services/services-form/services-form.module';
import { ProductsFormModule } from './products-services/products-form/products-form.module';

@NgModule({
  declarations: [],
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
    ServicesFormModule,
    ProductsFormModule,
  ]
})
export class ModulesModule { }
