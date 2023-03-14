import { Component, OnInit } from '@angular/core';
import { EMPLOYEES_COLUMNS, EMPLOYEES_FIELDS, EMPLOYEES_PIPES } from './employees.const';

import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public employeesColumns = EMPLOYEES_COLUMNS;
  public employeesFields = EMPLOYEES_FIELDS;
  public employeesPipes = EMPLOYEES_PIPES;

  public employees!: any[];

  public employeesActions = [
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
    this.employees = [
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
    this.employees.push(
      {
        name: 'André Luiz Pedro da Silva',
        email: 'andre@raipp.com.br',
        phone: '+55 11988756644',
        permissions: 'Total'
      },
    );
  }

}
