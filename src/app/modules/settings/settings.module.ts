import { UsersFormModule } from './users/users-form/users-form.module';
import { ImageCropperModule } from './../../shared/components/image-cropper/image-cropper.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { SettingsComponent } from './settings.component';
import { BankDataComponent } from './bank-data/bank-data.component';
import { CustomizationComponent } from './customization/customization.component';
import { UsersComponent } from './users/users.component';

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


@NgModule({
  declarations: [
    SettingsComponent,
    BankDataComponent,
    CustomizationComponent,
    UsersComponent,
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
    UsersFormModule,
  ],
  exports: [
    BankDataComponent,
    SettingsComponent,
    CustomizationComponent,
    UsersComponent,
  ]
})
export class SettingsModule { }
