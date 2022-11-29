import { NavbarModule } from './../../../shared/components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ClientsListComponent } from './clients-list.component';

@NgModule({
  declarations: [ClientsListComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
  ],
  exports: [
    ClientsListComponent
  ]
})
export class ClientsListModule { }
