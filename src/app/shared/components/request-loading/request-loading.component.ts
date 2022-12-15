import { Component, EventEmitter, OnInit } from '@angular/core';
import { RequestLoadingService } from './request-loading.service';

@Component({
  selector: 'app-request-loading',
  templateUrl: './request-loading.component.html',
  styleUrls: ['./request-loading.component.scss'],
})
export class RequestLoadingComponent implements OnInit {
  public show: EventEmitter<boolean> = new EventEmitter();
  public hide: EventEmitter<boolean> = new EventEmitter();

  public showProgressBar: boolean = false;

  constructor(private requestLoadingService: RequestLoadingService) {}

  ngOnInit(): void {
    this.requestLoadingService.show$.subscribe((bool) => {
      this.show.emit(bool);

      this.showProgressBar = true;
    });

    this.requestLoadingService.hide$.subscribe((bool) => {
      this.hide.emit(bool);

      this.showProgressBar = false;
    });
  }
}
