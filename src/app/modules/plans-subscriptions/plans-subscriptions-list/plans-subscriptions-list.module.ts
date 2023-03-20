import { SubscriptionsListModule } from './../subscriptions/subscriptions-list/subscriptions-list.module';
import { PlansSubscriptionsListComponent } from './plans-subscriptions-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlansListModule } from '../plans/plans-list/plans-list.module';

//PrimeNG
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    PlansSubscriptionsListComponent,
    ],
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
    PlansListModule,
    SubscriptionsListModule,
  ],
  exports: [PlansSubscriptionsListComponent]
})
export class PlansSubscriptionsListModule { }
