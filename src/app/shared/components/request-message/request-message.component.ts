import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { RequestMessageService } from './request-message.service';

@Component({
  selector: 'app-request-message',
  templateUrl: './request-message.component.html',
  styleUrls: ['./request-message.component.scss'],
})
export class RequestMessageComponent implements OnInit {
  @Input() message: string = 'Sucesso';
  @Input() type: 'success' | 'info' | 'warning' | 'error' = 'success';

  public show: EventEmitter<void> = new EventEmitter();
  public hide: EventEmitter<void> = new EventEmitter();

  public showMessageBar: boolean = false;

  constructor(private requestMessageService: RequestMessageService) {}

  ngOnInit(): void {
    this.requestMessageService.show$.subscribe((obj) => {
      this.onShow(obj);

      setTimeout(() => (this.showMessageBar = false), 3000);
    });

    this.requestMessageService.hide$.subscribe(() => this.onHide());
  }

  onShow(obj: any) {
    this.show.emit();

    this.message = obj.message;
    this.type = obj.type;

    this.showMessageBar = true;
  }

  onHide() {
    this.hide.emit();

    this.showMessageBar = false;
  }
}
