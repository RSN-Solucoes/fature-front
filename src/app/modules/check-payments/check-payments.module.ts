import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckPaymentsComponent } from './check-payments.component';

//PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PaymentsDataComponent } from './payments-data/payments-data.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
  declarations: [
    CheckPaymentsComponent,
    PaymentsDataComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    NgxMaskModule,
    ButtonModule,
    NavbarModule,
  ],
  exports: [
    CheckPaymentsComponent,
  ]
})
export class CheckPaymentsModule { }
