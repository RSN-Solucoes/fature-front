import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxMaskModule.forRoot()],
  exports: [NgxMaskModule],
})
export class SharedModule {}
