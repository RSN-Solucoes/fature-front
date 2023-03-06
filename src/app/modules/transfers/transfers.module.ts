import { TransfersComponent } from './transfers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

import { ButtonModule } from 'primeng/button';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TransfersListComponent } from './transfers-list/transfers-list.component';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [TransfersComponent],
  imports: [CommonModule, NavbarModule, ButtonModule, FullCalendarModule],
  exports: [TransfersComponent],
})
export class TransfersModule {}
