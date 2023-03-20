import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsFormComponent } from './subscriptions-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

//PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [SubscriptionsFormComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    NavbarModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    InputNumberModule,
  ],
  exports: [SubscriptionsFormComponent]
})
export class SubscriptionsFormModule { }
