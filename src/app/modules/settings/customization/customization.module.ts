import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomizationComponent } from './customization.component';

import { FileUploadModule } from 'primeng/fileupload';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    CustomizationComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    ColorPickerModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CustomizationComponent]
})
export class CustomizationModule { }
