import { EmployeesFormModule } from './employees/employees-form/employees-form.module';
import { EditTemplateModule } from './emails-template/edit-template/edit-template.module';
import { ImageCropperModule } from './../../shared/components/image-cropper/image-cropper.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { SettingsComponent } from './settings.component';
import { BankDataComponent } from './bank-data/bank-data.component';
import { CustomizationComponent } from './customization/customization.component';
import { EmployeesComponent } from './employees/employees.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PrimeNG
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CompanyDataComponent } from './company-data/company-data.component';
import { NgxMaskModule } from 'ngx-mask';
import { EmailsTemplateComponent } from './emails-template/emails-template.component';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';

import { NgxImageCompressService } from 'ngx-image-compress';

@NgModule({
  declarations: [
    SettingsComponent,
    BankDataComponent,
    CustomizationComponent,
    EmployeesComponent,
    CompanyDataComponent,
    EmailsTemplateComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    ImageCropperModule,
    TabViewModule,
    FileUploadModule,
    ColorPickerModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
    NgxMaskModule,
    DialogModule,
    TooltipModule,
    SkeletonModule,
    EmployeesFormModule,
    EditTemplateModule,
  ],
  exports: [
    BankDataComponent,
    SettingsComponent,
    CustomizationComponent,
    EmployeesComponent,
  ],
  providers: [NgxImageCompressService],
})
export class SettingsModule {}
