import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { SettingsComponent } from './settings.component';
import { BankDataComponent } from './bank-data/bank-data.component';
import { CustomizationComponent } from './customization/customization.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PrimeNG
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    SettingsComponent,
    BankDataComponent,
    CustomizationComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    TabViewModule,
    FileUploadModule,
    ColorPickerModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
  ],
  exports: [
    BankDataComponent,
    SettingsComponent,
    CustomizationComponent
  ]
})
export class SettingsModule { }
