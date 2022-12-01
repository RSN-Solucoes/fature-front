import { Component, OnInit } from '@angular/core';
import {
  INVOICES_COLUMNS,
  INVOICES_FIELDS,
  INVOICES_PIPES,
  INVOICES_VALUE_SELECT_LIST,
} from './invoices-lis.const';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  public clientTableColumns = INVOICES_COLUMNS;
  public clientTableFields = INVOICES_FIELDS;
  public clientTablePipes = INVOICES_PIPES;

  public clients = INVOICES_VALUE_SELECT_LIST;

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

  constructor() { }

  ngOnInit(): void {
  }

}