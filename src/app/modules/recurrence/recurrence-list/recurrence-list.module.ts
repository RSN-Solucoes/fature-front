import { RecurrenceListComponent } from './recurrence-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionsViewComponent } from './subscriptions-view/subscriptions-view.component';
import { PlansFormComponent } from './plans-form/plans-form.component';
import { SubscriptionsFormComponent } from './subscriptions-form/subscriptions-form.component';

//PrimeNG
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [RecurrenceListComponent, SubscriptionsViewComponent, PlansFormComponent, SubscriptionsFormComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    InputNumberModule,
  ],
  exports: [RecurrenceListComponent]
})
export class RecurrenceListModule { }
