import { ImageCropperComponent } from './image-cropper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ImageCropperComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageCropperComponent]
})
export class ImageCropperModule { }
