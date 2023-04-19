import { CheckPaymentsModule } from './payments/payments-form/payments-form.module';
import { CheckoutModule } from './payments/checkout/checkout.module';
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
import { InvoicesListModule } from './invoices/invoices-list/invoices-list.module';
import { ProductsServicesListModule } from './products-services/products-services-list/products-services-list.module';
import { TransfersModule } from './transfers/transfers.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SettingsModule } from './settings/settings.module';
import { InvoiceFormModule } from './invoices/invoice-form/invoice-form.module';
import { PlansSubscriptionsModule } from './plans-subscriptions/plans-subscriptions.module';
import { SubscriptionsPaymentModule } from './payments/subscriptions-payment/subscriptions-payment.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ClientsListModule,
    ClientsFormModule,
    ProductsServicesListModule,
    PlansSubscriptionsModule,
    InvoicesListModule,
    TransfersModule,
    LoginModule,
    DashboardModule,
    ProductsServicesFormModule,
    SettingsModule,
    InvoiceFormModule,
    CheckPaymentsModule,
    CheckoutModule,
    SubscriptionsPaymentModule,
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ]
})
export class ModulesModule { }
