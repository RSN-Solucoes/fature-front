import { PlansListComponent } from './plans-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';


@NgModule({
  declarations: [
    PlansListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports: [
    PlansListComponent,
  ]
})
export class PlansListModule { }
