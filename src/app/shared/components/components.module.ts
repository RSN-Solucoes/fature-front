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
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AsideComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule {}
