import { ClientsComponent } from './modules/clients/clients.component';
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
    component: ClientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
