import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

//PrimeNG
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    TabViewModule,
    DropdownModule,
    InputNumberModule,
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
