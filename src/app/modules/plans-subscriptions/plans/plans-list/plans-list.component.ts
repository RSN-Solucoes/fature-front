import { PlansService } from './../../../../services/plans.service';
import { Component, OnInit } from '@angular/core';
import { 
  PLANS_COLUMNS,
  PLANS_FIELDS,
  PLANS_PIPES,
 } from '../plans.const';
 import { ConfirmationService } from 'primeng/api';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.scss']
})
export class PlansListComponent implements OnInit {
  public plansColumns = PLANS_COLUMNS;
  public plansFields = PLANS_FIELDS;
  public plansPipes = PLANS_PIPES;

  public plans: any[] = [];

  public plansActions = [
    {
      label: 'Editar',
      icon: 'pi-pencil',
      action: (row: any) => {
        this.editPlan(row);
      },
    },
    {
      label: 'Deletar',
      icon: 'pi-trash',
      action: (row: any, event: Event) => {
        this.deletePlan(row, event);
      },
    },
  ];

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 0;

  constructor(
    private plansService: PlansService,
    private confirmationService: ConfirmationService,
    private requestMessageService: RequestMessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPlans(this.pageIndex, this.pageLimit);
  }

  getPlans(pageIndex: number, pageLimit: number): void {
    const pagination = `page=${pageIndex}&limit=${pageLimit}`;

    this.plansService.getPlans(pagination).subscribe({
      next: (res) => {
        this.totalRecords = res.pagination.totalItems;
        res.data.forEach((el: any) => {
          this.plans.push({
            planName: el.plan.name,
            description: el.plan.description,
            chargeDay: el.billing.chargeDate,
            value: el.billing.amount,
            id: el.id
          });
        });
      },
      error: (err) => {
      }
    })
  }

  deletePlan(row: any, event: Event) {
    this.confirmationService.confirm({
      target: event.target ? event.target : undefined,
      message: 'Deseja excluir o plano?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.plansService.deletePlan(row.id).subscribe({
          next: (res) => {
            this.requestMessageService.show(
              `Plano excluido com sucesso`,
              'success'
            );
            location.reload();
          },
          error: (err) => {
            this.requestMessageService.show(
              `Erro ao excluir plano`,
              'error'
            );
          },
        });
      },
    });
  }

  editPlan(row: any) {
    this.router.navigate([`painel/recorrencias/planos/editar/${row.id}`]);
  }

  loadMoreItems(pageLimit: number) {
    this.getPlans(this.pageIndex, pageLimit);
  }
}
