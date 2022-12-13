import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFormComponent } from './products-form.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarModule,
    InputTextareaModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  exports: [ProductsFormComponent]
})
export class ProductsFormModule { }
