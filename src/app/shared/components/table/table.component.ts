import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() fields: string[] = [];
  @Input() value: any[] = [];
  @Input() pipes: string[] = [];
  @Input() actions!: any;

  constructor() {}

  getValue(value: any) {
    return String(value);
  }
}
