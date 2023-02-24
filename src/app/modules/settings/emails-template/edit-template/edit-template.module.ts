import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTemplateComponent } from './edit-template.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditTemplateComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    InputTextareaModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [EditTemplateComponent]
})
export class EditTemplateModule { }
