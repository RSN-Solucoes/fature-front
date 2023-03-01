import { TransfersComponent } from './transfers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

import { ButtonModule } from 'primeng/button';

// Full Calendar
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TransfersListComponent } from './transfers-list/transfers-list.component';
import { TableModule } from 'src/app/shared/components/table/table.module';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
]);

@NgModule({
  declarations: [TransfersComponent, TransfersListComponent],
  imports: [CommonModule, NavbarModule, ButtonModule, FullCalendarModule, TableModule],
  exports: [TransfersComponent, FullCalendarModule],
})
export class TransfersModule {}
