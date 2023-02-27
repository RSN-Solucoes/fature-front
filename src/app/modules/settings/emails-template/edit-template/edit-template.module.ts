import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTemplateComponent } from './edit-template.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { EditorModule } from 'primeng/editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    EditTemplateComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
  ],
  exports: [EditTemplateComponent]
})
export class EditTemplateModule { }
