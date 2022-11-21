import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';

// Prime NG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    LoginComponent,
    ClientsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
  ]
})
export class ModulesModule { }
