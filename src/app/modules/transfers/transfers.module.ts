import { NavbarModule } from './../../shared/components/navbar/navbar.module';
import { TransfersComponent } from './transfers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TransfersListComponent } from './transfers-list/transfers-list.component';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [TransfersComponent, TransfersListComponent],
  imports: [CommonModule, ButtonModule, FullCalendarModule, TableModule, NavbarModule],
  exports: [TransfersComponent],
})
export class TransfersModule {}
