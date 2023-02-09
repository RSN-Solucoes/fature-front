import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankDataComponent } from './bank-data.component';

//PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    BankDataComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputNumberModule,
  ],
  exports: [BankDataComponent]
})
export class BankDataModule { }
