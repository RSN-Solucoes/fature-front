import { Router } from '@angular/router';
import {
  CLIENT_TABLE_COLUMNS,
  CLIENT_TABLE_FIELDS,
  CLIENT_TABLE_PIPES,
  CLIENT_VALUE_SELECT_LIST,
} from './clients-list.const';

import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  public clientTableColumns = CLIENT_TABLE_COLUMNS;
  public clientTableFields = CLIENT_TABLE_FIELDS;
  public clientTablePipes = CLIENT_TABLE_PIPES;

  public clients!: any;

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

  constructor(
    private router: Router,
    private clientsService: ClientsService,
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  navigateToClientForm() {
    this.router.navigate(['painel/clientes/novo'])
  }

  getClients() {
    this.clientsService.getClients().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {

      }
    });
  }
}
