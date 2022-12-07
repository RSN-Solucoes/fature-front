
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../shared/shared.module';
import { ClientsFormModule } from './clients/clients-form/clients-form.module';
import { ClientsListModule } from './clients/clients-list/clients-list.module';
import { RecurrenceListModule } from './recurrence/recurrence-list/recurrence-list.module';
import { InvoicesListModule } from './invoices/invoices-list/invoices-list.module';
import { ProductsServicesListModule } from './products-services/products-services-list/products-services-list.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

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
    LoginModule,
    DashboardModule,
  ]
})
export class ModulesModule { }
