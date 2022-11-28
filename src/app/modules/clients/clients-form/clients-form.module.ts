import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsFormComponent } from './clients-form.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientsFormComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NavbarModule,
  ],
  exports: [
    ClientsFormComponent,
  ]
})
export class ClientsFormModule { }
