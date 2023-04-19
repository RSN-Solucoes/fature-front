import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsPaymentComponent } from './subscriptions-payment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgxMaskModule } from 'ngx-mask';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [SubscriptionsPaymentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    NgxMaskModule,
    DropdownModule,
  ],
  exports: [SubscriptionsPaymentComponent]
})
export class SubscriptionsPaymentModule { }
