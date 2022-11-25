import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientsFormComponent } from './clients/clients-form/clients-form.component';

// Prime NG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    LoginComponent,
    ClientsListComponent,
    ClientsFormComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    InputNumberModule,
    ReactiveFormsModule,
    DropdownModule,
  ]
})
export class ModulesModule { }
