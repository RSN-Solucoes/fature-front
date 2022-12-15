import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestMessageService {
  public show$: Subject<{
    message: string;
    type: 'success' | 'info' | 'warning' | 'error';
    show: boolean;
  }> = new Subject();

  public hide$: Subject<void> = new Subject();

  constructor() {}

  show(message: string, type: 'success' | 'info' | 'warning' | 'error') {
    this.show$.next({ message, type, show: true });
  }

  hide() {
    this.hide$.next();
  }
}
