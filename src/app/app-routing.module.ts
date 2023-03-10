import { SubscriptionsFormComponent } from './modules/recurrence/recurrence-list/subscriptions-form/subscriptions-form.component';
import { PlansFormComponent } from './modules/recurrence/recurrence-list/plans-form/plans-form.component';
import { TransfersListComponent } from './modules/transfers/transfers-list/transfers-list.component';
import { EditTemplateComponent } from './modules/settings/emails-template/edit-template/edit-template.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { InvoiceFormComponent } from './modules/invoices/invoice-form/invoice-form.component';
import { ProductsServicesFormComponent } from './modules/products-services/products-services-form/products-services-form.component';
import { InvoicesListComponent } from './modules/invoices/invoices-list/invoices-list.component';
import { ClientsFormComponent } from './modules/clients/clients-form/clients-form.component';
import { ClientsListComponent } from './modules/clients/clients-list/clients-list.component';
import { ProductsServicesListComponent } from './modules/products-services/products-services-list/products-services-list.component';
import { RecurrenceListComponent } from './modules/recurrence/recurrence-list/recurrence-list.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { TransfersComponent } from './modules/transfers/transfers.component';
import { UsersFormComponent } from './modules/settings/users/employees-form/users-form.component';
import { ClientsCreateComponent } from './modules/clients/clients-form/clients-create/clients-create.component';

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
    component: ClientsCreateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/clientes/editar/:id',
    component: ClientsFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/produtos-e-servicos',
    component: ProductsServicesListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/produtos-e-servicos/:type/novo',
    component: ProductsServicesFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/produtos-e-servicos/:type/editar/:id',
    component: ProductsServicesFormComponent,
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
    path: 'painel/faturas/novo',
    component: InvoiceFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/faturas/editar/:id',
    component: InvoiceFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/transferencias',
    component: TransfersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/configuracoes',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/configuracoes/colaboradores/novo',
    component: UsersFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/configuracoes/edit-template',
    component: EditTemplateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/transferencias/listagem',
    component: TransfersListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/recorrencias/planos/novo',
    component: PlansFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'painel/recorrencias/assinaturas/novo',
    component: SubscriptionsFormComponent,
    canActivate: [AuthGuardService],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
