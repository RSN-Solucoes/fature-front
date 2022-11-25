import { Router } from '@angular/router';
import { 
  Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output 
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() fields: string[] = [];
  @Input() value: any[] = [];
  @Input() pipes: string[] = [];
  @Input() actions!: any;

  @Output() tableSorter: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}

  getValue(value: any) {
    return String(value);
  }

  sortTable(columnKey: any) {
    let columnKeyValue!: string;

    if(typeof(columnKey) != typeof('')) {
      columnKeyValue = columnKey.join('.')
    } else columnKeyValue = columnKey;

    this.tableSorter.emit(columnKeyValue);
  }

  navigate(route: any) {
    console.log(route)
    //this.router.navigate([route]);
  };
}
