import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NavbarModule,
    ChartModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
