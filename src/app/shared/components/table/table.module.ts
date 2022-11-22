import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';

// PrimeNG
import { TableModule as PrimeTableModule } from 'primeng/table';

// Pipes
import { DynamicPipe } from '../../pipes/dynamic.pipe';

@NgModule({
  declarations: [DynamicPipe, TableComponent],
  imports: [CommonModule, PrimeTableModule],
  exports: [TableComponent],
})
export class TableModule {}
