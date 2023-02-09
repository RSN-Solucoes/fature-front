import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  exports: [CustomizationComponent]
})
export class CustomizationModule { }
