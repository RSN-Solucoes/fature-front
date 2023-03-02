import { NgxMaskModule } from 'ngx-mask';
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
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'src/app/shared/components/table/table.module';


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
    NgxMaskModule,
    TabViewModule,
    TableModule,
  ],
  exports: [
    ClientsFormComponent,
  ]
})
export class ClientsFormModule { }
