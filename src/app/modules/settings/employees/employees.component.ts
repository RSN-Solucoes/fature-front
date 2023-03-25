import { SettingsService } from './../../../services/settings.service';
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
        this.router.navigate([`painel/configuracoes/colaboradores/editar/${row.id}`]);
      },
    },
    {
      label: 'Excluir',
      icon: 'pi-trash',
      action: (row: any, event: Event) => {
        this.deleteEmployee(row, event);
      },
    },
  ];

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 0;

  constructor(
    private router: Router,
    private requestMessageService: RequestMessageService,
    private confirmationService: ConfirmationService,
    private settingsService: SettingsService,
  ) { }

  ngOnInit(): void {
    this.getEmployees(this.pageIndex, this.pageLimit);
  }

  getEmployees(pageIndex: number, pageLimit: number) {
    const pagination = `page=${pageIndex}&limit=${pageLimit}`;

    this.settingsService.getEmployees(pagination).subscribe({
      next: (res) => {
        this.employees = res.data;
        this.totalRecords = res.pagination.totalItems;
        console.log(res) 
      },
      error: (err) => {
      }
    });
  }

  deleteEmployee(row: any, event: Event) {
    this.confirmationService.confirm({
      target: event.target ? event.target : undefined,
      message: 'Deseja excluir o colaborador?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.settingsService.deleteEmployee(row.id).subscribe({
          next: (res) => {
            this.requestMessageService.show(
              `Colaborador excluído com sucesso`,
              'success'
            );
            
            location.reload();
          },
          error: (err) => {
            this.requestMessageService.show(
              `Houve um erro`,
              'error'
            );
          },
        });
      },
    });
  }

  loadMoreItems(pageLimit: number) {
    this.getEmployees(this.pageIndex, pageLimit);
  }

}
