import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsFormComponent } from './payments-form.component';

//PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { PaymentsListComponent } from '../payments-list/payments-list.component';

@NgModule({
  declarations: [
    PaymentsFormComponent,
    PaymentsListComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    NgxMaskModule,
    ButtonModule,
    NavbarModule,
  ],
  exports: [
    PaymentsFormComponent,
  ]
})
export class CheckPaymentsModule { }
