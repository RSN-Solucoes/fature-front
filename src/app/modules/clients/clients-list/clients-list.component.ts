import { I_Client } from '../../../core/interfaces/client.interface';
import { Router } from '@angular/router';
import {
  CLIENT_TABLE_COLUMNS,
  CLIENT_TABLE_FIELDS,
  CLIENT_TABLE_PIPES,
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

  public clients!: I_Client[];

  public clientTableActions = [
    {
      label: 'Editar',
      icon: 'pi-pencil',
      action: (row: any) => {
        this.editClient(row);
      },
    },
    {
      label: 'Deletar',
      icon: 'pi-trash',
      action: (row: any) => {
        this.deleteClient(row);
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

  getClients() {
    this.clientsService.getClients().subscribe({
      next: (res) => {
        this.clients = res.data;
      },
      error: (err) => {
      }
    });
  }

  navigateToClientForm() {
    this.router.navigate(['painel/clientes/novo'])
  }

  editClient(row: any) {
    this.router.navigate(['painel/clientes/editar/', row.id]);
  }
  
  deleteClient(row: any) {
    this.clientsService.deleteClient(row.id).subscribe({
      next: (res) => {
        alert('Cliente excluído com sucesso!');
      },
      error: (err) => {
      }
    });
  }
}
