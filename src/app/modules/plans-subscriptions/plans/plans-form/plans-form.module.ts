import { PlansFormComponent } from './plans-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PrimeNG
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    PlansFormComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
  ],
  exports: [
    PlansFormComponent,
  ]
})
export class PlansFormModule { }
