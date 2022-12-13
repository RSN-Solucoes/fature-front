import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestLoadingComponent } from './request-loading.component';

// PrimeNG
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [RequestLoadingComponent],
  imports: [CommonModule, ProgressBarModule],
  exports: [RequestLoadingComponent],
})
export class RequestLoadingModule {}
