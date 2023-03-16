import { SubscriptionsViewModule } from './subscriptions/subscriptions-view/subscriptions-view.module';
import { SubscriptionsListModule } from './subscriptions/subscriptions-list/subscriptions-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansSubscriptionsListModule } from './plans-subscriptions-list/plans-subscriptions-list.module';
import { PlansListModule } from './plans/plans-list/plans-list.module';
import { PlansFormModule } from './plans/plans-form/plans-form.module';
import { SubscriptionsFormModule } from './subscriptions/subscriptions-form/subscriptions-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlansSubscriptionsListModule,
    PlansListModule,
    PlansFormModule,
    SubscriptionsFormModule,
    SubscriptionsListModule,
    SubscriptionsViewModule,
  ],
})
export class PlansSubscriptionsModule { }
