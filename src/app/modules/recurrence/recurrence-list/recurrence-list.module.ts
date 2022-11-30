import { RecurrenceListComponent } from './recurrence-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

//PrimeNG
import { TabViewModule } from 'primeng/tabview';



@NgModule({
  declarations: [RecurrenceListComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    TabViewModule,
  ],
  exports: [RecurrenceListComponent]
})
export class RecurrenceListModule { }
