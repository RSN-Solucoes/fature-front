import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AsideComponent } from './aside/aside.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from './table/table.module';

@NgModule({
  declarations: [AsideComponent, NavbarComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [AsideComponent, NavbarComponent],
})
export class ComponentsModule {}
