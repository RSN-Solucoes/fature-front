import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ComponentsModule } from './components/components.module';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    ComponentsModule,
    NgxMaskModule,
  ],
})
export class SharedModule { }
