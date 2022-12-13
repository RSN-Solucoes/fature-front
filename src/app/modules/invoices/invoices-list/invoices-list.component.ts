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
  public invoicesColumns = INVOICES_COLUMNS;
  public invoicesFields = INVOICES_FIELDS;
  public invoicesPipes = INVOICES_PIPES;

  public invoices = INVOICES_VALUE_SELECT_LIST;

  public invoicesActions = [
    {
      label: 'Visualizar',
      icon: 'pi-eye',
      action: (id: string) => {
        console.log(id);
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
