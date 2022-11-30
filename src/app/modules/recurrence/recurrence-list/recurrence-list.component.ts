import { Component, OnInit } from '@angular/core';
import {
  RECURRENCE_TABLE_COLUMNS,
  RECURRENCE_TABLE_FIELDS,
  RECURRENCE_TABLE_PIPES,
  RECURRENCE_VALUE_SELECT_LIST,
} from './recurrence-list.const';

@Component({
  selector: 'app-recurrence-list',
  templateUrl: './recurrence-list.component.html',
  styleUrls: ['./recurrence-list.component.scss']
})
export class RecurrenceListComponent implements OnInit {
  public recurrenceColumns = RECURRENCE_TABLE_COLUMNS;
  public recurrenceFields = RECURRENCE_TABLE_FIELDS;
  public recurrencePipes = RECURRENCE_TABLE_PIPES;

  public recurrence = RECURRENCE_VALUE_SELECT_LIST;

  public recurrenceActions = [
    {
      label: 'Visualizar',
      icon: 'pi-eye',
      action: () => {
        alert('Visualizar');
      },
    },
    {
      label: 'Deletar',
      icon: 'pi-trash',
      action: () => {
        alert('Deletar');
      },
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
