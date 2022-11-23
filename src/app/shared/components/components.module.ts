import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from './table/table.module';

@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent,
    TableModule,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AsideComponent,
    HeaderComponent,
    TableModule,
  ],
})
export class ComponentsModule {}
