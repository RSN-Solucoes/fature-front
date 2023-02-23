import { Component, OnInit } from '@angular/core';
import { USERS_COLUMNS, USERS_FIELDS, USERS_PIPES } from './users.const';

import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public usersColumns = USERS_COLUMNS;
  public usersFields = USERS_FIELDS;
  public usersPipes = USERS_PIPES;

  public users!: any[];

  public usersActions = [
    {
      label: 'Editar',
      icon: 'pi-pencil',
      action: (row: any) => {
        alert("Editar")
      },
    },
    {
      label: 'Excluir',
      icon: 'pi-trash',
      action: (row: any, event: Event) => {
        alert('Excluir')
      },
    },
  ];

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 10;

  constructor(
    private router: Router,
    private requestMessageService: RequestMessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.users = [
      {
        name: 'André Luiz Pedro da Silva',
        email: 'andre@raipp.com.br',
        phone: '+55 11988756644',
        permissions: 'Total'
      },
      {
        name: 'André Luiz Pedro da Silva',
        email: 'andre@raipp.com.br',
        phone: '+55 11988756644',
        permissions: 'Total'
      },
      {
        name: 'André Luiz Pedro da Silva',
        email: 'andre@raipp.com.br',
        phone: '+55 11988756644',
        permissions: 'Total'
      },
      {
        name: 'André Luiz Pedro da Silva',
        email: 'andre@raipp.com.br',
        phone: '+55 11988756644',
        permissions: 'Total'
      },
    ];
  }

  loadMoreItems(pageLimit: number) {
    this.users.push(
      {
        name: 'André Luiz Pedro da Silva',
        email: 'andre@raipp.com.br',
        phone: '+55 11988756644',
        permissions: 'Total'
      },
    );
  }

}
