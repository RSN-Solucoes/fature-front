import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-message',
  templateUrl: './request-message.component.html',
  styleUrls: ['./request-message.component.scss'],
})
export class RequestMessageComponent implements OnInit {
  @Input() message: string = 'Sucesso';
  @Input() type: 'success' | 'info' | 'warning' | 'error' = 'success';

  constructor() {}

  ngOnInit(): void {}
}
