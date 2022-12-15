import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestMessageComponent } from './request-message.component';
import { RequestMessageService } from './request-message.service';

@NgModule({
  declarations: [RequestMessageComponent],
  imports: [CommonModule],
  exports: [RequestMessageComponent],
  providers: [RequestMessageService],
})
export class RequestMessageModule {}
