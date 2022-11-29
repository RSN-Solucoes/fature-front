import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class NavbarModule { }
