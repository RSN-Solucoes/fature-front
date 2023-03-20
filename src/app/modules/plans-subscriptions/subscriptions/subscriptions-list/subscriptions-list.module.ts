import { SubscriptionsListComponent } from './subscriptions-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [SubscriptionsListComponent],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports: [SubscriptionsListComponent]
})
export class SubscriptionsListModule { }
