import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columns: string[] = [];

  @Input() value: any[] = [];

  @Input() pipes: string[] = [];

  @Input() actions!: any[];

  constructor() {}

  ngOnInit(): void {}

  getValue(value: any) {
    return String(value);
  }
}
