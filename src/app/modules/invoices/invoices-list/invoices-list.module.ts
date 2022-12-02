import { InvoicesListComponent } from './invoices-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { TableModule } from 'src/app/shared/components/table/table.module';


@NgModule({
  declarations: [InvoicesListComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
  ],
  exports: [InvoicesListComponent]
})
export class InvoicesListModule { }
