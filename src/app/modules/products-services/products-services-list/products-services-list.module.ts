import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsServicesListComponent } from './products-services-list.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from './../../../shared/components/navbar/navbar.module';

@NgModule({
  declarations: [ProductsServicesListComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
  ],
  exports: [ProductsServicesListComponent]
})
export class ProductsServicesListModule { }
