import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { 
  TRANSFERS_LIST_COLUMNS, 
  TRANSFERS_LIST_FIELDS, 
  TRANSFERS_LIST_TABLE_PIPES
 } from './transfers-list.const';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss']
})
export class TransfersListComponent implements OnInit {

  public transfersListColumns = TRANSFERS_LIST_COLUMNS;
  public transfersListFields = TRANSFERS_LIST_FIELDS;
  public transfersListTablePipes = TRANSFERS_LIST_TABLE_PIPES;

  public transfersListValue: any = [
    {
      client: 'Luiz André Bragança Santos',
      methods: 'Crédito',
      product: 'Caixa Surpresa 01',
      value: '200',
    },
    {
      client: 'Lisia Maria da Silva',
      methods: 'Débito',
      product: 'Caixa Surpresa 03',
      value: '200',
    },
    {
      client: 'Marcio Adolfo Guimarães',
      methods: 'Boleto',
      product: 'Caixa Surpresa',
      value: '100',
    },
    {
      client: 'Pedro Alberto Maciel',
      methods: 'Pix',
      product: 'Produto exemplo',
      value: '150',
    },
  ];

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  loadMoreItems(pageLimit: number) {
    //function
  }

  cancel(): void {
    this.router.navigate(['painel/transferencias']);
  }

}
