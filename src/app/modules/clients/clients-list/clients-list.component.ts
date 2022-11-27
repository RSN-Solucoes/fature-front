import {
  CLIENT_TABLE_COLUMNS,
  CLIENT_TABLE_FIELDS,
  CLIENT_TABLE_PIPES,
  CLIENT_VALUE_SELECT_LIST,
} from './clients-list.const';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  public clientTableColumns = CLIENT_TABLE_COLUMNS;
  public clientTableFields = CLIENT_TABLE_FIELDS;
  public clientTablePipes = CLIENT_TABLE_PIPES;

  public clients = CLIENT_VALUE_SELECT_LIST;

  public clientTableActions = [
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

  constructor() {}

  ngOnInit(): void {}
}
