import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsServicesListComponent } from './products-services-list.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from './../../../shared/components/navbar/navbar.module';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [ProductsServicesListComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    DialogModule,
  ],
  exports: [ProductsServicesListComponent]
})
export class ProductsServicesListModule { }
