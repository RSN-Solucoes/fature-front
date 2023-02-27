import { ImageCropperModule } from './../../../../shared/components/image-cropper/image-cropper.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFormComponent } from './users-form.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { NgxMaskModule } from 'ngx-mask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    NgxMaskModule,
    InputTextareaModule,
    AccordionModule,
    InputSwitchModule,
    FileUploadModule,
    DialogModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
  exports: [UsersFormComponent],
})
export class UsersFormModule { }
