import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestLoadingComponent } from './request-loading.component';

// PrimeNG
import { ProgressBarModule } from 'primeng/progressbar';

// Services
import { RequestLoadingService } from './request-loading.service';

@NgModule({
  declarations: [RequestLoadingComponent],
  imports: [CommonModule, ProgressBarModule],
  exports: [RequestLoadingComponent],
  providers: [RequestLoadingService],
})
export class RequestLoadingModule {}
