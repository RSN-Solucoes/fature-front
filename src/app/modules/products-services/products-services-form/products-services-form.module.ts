import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsServicesFormComponent } from './products-services-form.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsServicesFormComponent],
  imports: [
    CommonModule,
    NavbarModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [ProductsServicesFormComponent]
})
export class ProductsServicesFormModule { }
