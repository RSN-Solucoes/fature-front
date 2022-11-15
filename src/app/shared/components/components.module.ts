import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';

// PrimeNG


@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AsideComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule { }