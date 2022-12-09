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

  public clients!: any;

  public clientTableActions = [
    {
      label: 'Editar',
      icon: 'pi-pencil',
      action: (id: string) => {
        this.router.navigate(['painel/clientes/editar/', id]);
      },
    },
    {
      label: 'Deletar',
      icon: 'pi-trash',
      action: (id: string) => {
        this.clientsService.deleteClient(id).subscribe({
          next: (res) => {
            alert('Cliente excluído com sucesso!');
          },
          error: (err) => {
            console.log(err);
          }
        })
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
        this.clients = res.data;
      },
      error: () => {

      }
    });
  }
}
