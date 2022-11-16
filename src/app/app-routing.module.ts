import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'painel/login',
    pathMatch: 'full',
  },
  {
    path: 'painel/login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
