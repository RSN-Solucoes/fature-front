import { ServicesFormComponent } from './modules/products-services/services-form/services-form.component';
import { ProductsFormComponent } from './modules/products-services/products-form/products-form.component';
import { InvoicesListComponent } from './modules/invoices/invoices-list/invoices-list.component';
import { ClientsFormComponent } from './modules/clients/clients-form/clients-form.component';
import { ClientsListComponent } from './modules/clients/clients-list/clients-list.component';
import { ProductsServicesListComponent } from './modules/products-services/products-services-list/products-services-list.component';
import { RecurrenceListComponent } from './modules/recurrence/recurrence-list/recurrence-list.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { TransfersComponent } from './modules/transfers/transfers.component';

import { AuthGuardService } from './core/guards/auth-guard.service';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'painel/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'painel/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/clientes',
    component: ClientsListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/clientes/novo',
    component: ClientsFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/produtos-e-servicos',
    component: ProductsServicesListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/produtos-e-servicos/novo-produto',
    component: ProductsFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/produtos-e-servicos/novo-servico',
    component: ServicesFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/recorrencias',
    component: RecurrenceListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/faturas',
    component: InvoicesListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/transferencias',
    component: TransfersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
