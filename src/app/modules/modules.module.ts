import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';

// Prime NG
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
  ]
})
export class ModulesModule { }
