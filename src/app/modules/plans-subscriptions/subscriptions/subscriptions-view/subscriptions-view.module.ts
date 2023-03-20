import { SubscriptionsViewComponent } from './subscriptions-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';



@NgModule({
  declarations: [SubscriptionsViewComponent],
  imports: [
    CommonModule,
    NavbarModule,
  ],
  exports: [
    SubscriptionsViewComponent,
  ]
})
export class SubscriptionsViewModule { }
