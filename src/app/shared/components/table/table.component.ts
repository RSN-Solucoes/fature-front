import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() selectedRows: EventEmitter<any[]> = new EventEmitter();

  allSelected: boolean = false;
  checkedRows: any[] = [];

  constructor() {}

  getValue(value: any) {
    return String(value);
  }

  checkAll() {
    if (this.allSelected) {
      this.checkedRows = [...this.value];

      this.value.forEach((data) => {
        data.checked = true;
      });
    } else {
      this.checkedRows = [];

      this.value.forEach((data) => {
        data.checked = false;
      });
    }
    
    this.selectedRows.emit(this.checkedRows);
  }

  selectRow(row: any) {
    const index = this.checkedRows.indexOf(row);

    if (index > -1) {
      this.checkedRows.splice(index, 1);
    } else {
      this.checkedRows.push(row);
    }

    if (this.checkedRows.length == this.value.length)
      this.allSelected = true;
    else this.allSelected = false;

    this.selectedRows.emit(this.checkedRows);
  }
}
