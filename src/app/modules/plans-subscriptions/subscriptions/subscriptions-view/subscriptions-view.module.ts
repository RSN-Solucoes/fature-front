import { SubscriptionsViewComponent } from './subscriptions-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [SubscriptionsViewComponent],
  imports: [
    CommonModule,
    NavbarModule,
    TableModule,
  ],
  exports: [
    SubscriptionsViewComponent,
  ]
})
export class SubscriptionsViewModule { }
