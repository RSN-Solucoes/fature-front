import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';

// Prime NG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class ModulesModule { }
