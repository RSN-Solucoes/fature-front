import { RecurrenceListComponent } from './recurrence-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PrimeNG
import { TabViewModule } from 'primeng/tabview';
import { PlansFormComponent } from './plans-form/plans-form.component';
import { SubscriptionsFormComponent } from './subscriptions-form/subscriptions-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [RecurrenceListComponent, PlansFormComponent, SubscriptionsFormComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
  ],
  exports: [RecurrenceListComponent]
})
export class RecurrenceListModule { }
