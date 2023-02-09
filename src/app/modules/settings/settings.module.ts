import { CustomizationModule } from './customization/customization.module';
import { BankDataModule } from './bank-data/bank-data.module';
import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

//PrimeNG
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    TabViewModule,
    BankDataModule,
    CustomizationModule,
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
