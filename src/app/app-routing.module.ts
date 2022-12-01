import { TransfersComponent } from './modules/transfers/transfers.component';
import { ClientsFormComponent } from './modules/clients/clients-form/clients-form.component';
import { ClientsListComponent } from './modules/clients/clients-list/clients-list.component';
import { ProductsServicesListComponent } from './modules/products-services/products-services-list/products-services-list.component';
import { RecurrenceListComponent } from './modules/recurrence/recurrence-list/recurrence-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'painel/login',
    pathMatch: 'full',
  },
  {
    path: 'painel/clientes',
    component: ClientsListComponent,
  },
  {
    path: 'painel/clientes/novo',
    component: ClientsFormComponent,
  },
  {
    path: 'painel/produtos-e-servicos',
    component: ProductsServicesListComponent,
  },
  {
    path: 'painel/recorrencias',
    component: RecurrenceListComponent,
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
