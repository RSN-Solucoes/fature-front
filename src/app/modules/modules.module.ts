import { InvoicesListModule } from './invoices/invoices-list/invoices-list.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';

// Modules
import { SharedModule } from './../shared/shared.module';
import { ClientsFormModule } from './clients/clients-form/clients-form.module';
import { ClientsListModule } from './clients/clients-list/clients-list.module';
import { RecurrenceListModule } from './recurrence/recurrence-list/recurrence-list.module';
import { ProductsServicesListModule } from './products-services/products-services-list/products-services-list.module';
import { LoginModule } from './login/login.module';

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
  ]
})
export class ModulesModule { }
