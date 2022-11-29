import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';

// PrimeNG
import { TableModule as PrimeTableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

import { DynamicPipe } from '../../pipes/dynamic.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent, DynamicPipe],
  imports: [CommonModule, PrimeTableModule, CheckboxModule, FormsModule],
  exports: [TableComponent],
})
export class TableModule {}
