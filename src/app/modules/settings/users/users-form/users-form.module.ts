import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFormComponent } from './users-form.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { NgxMaskModule } from 'ngx-mask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    NgxMaskModule,
    InputTextareaModule,
    AccordionModule,
  ],
  exports: [UsersFormComponent],
})
export class UsersFormModule { }
