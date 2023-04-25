import { BankDataComponent } from './../../../settings/bank-data/bank-data.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  SUBSCRIPTIONS_COLUMNS,
  SUBSCRIPTIONS_FIELDS,
  SUBSCRIPTIONS_VALUE_SELECT_LIST,
  SUBSCRIPTIONS_PIPES,
} from '../subscriptions.const';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import { ConfirmationService } from 'primeng/api';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';
import { PlansService } from 'src/app/services/plans.service';

@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.scss']
})
export class SubscriptionsListComponent implements OnInit {

  public subscriptionsColumns = SUBSCRIPTIONS_COLUMNS;
  public subscriptionsFields = SUBSCRIPTIONS_FIELDS;
  public subscriptionsPipes = SUBSCRIPTIONS_PIPES;

  public subscriptionsActions = [
    {
      label: 'Visualizar',
      icon: 'pi-eye',
      action: (row: any) => {
        this.navigateToSubscriptionView(row.id);
      },
    },
    {
      label: 'Deletar',
      icon: 'pi-trash',
      action: (row: any, event: Event) => {
        this.deleteSubscription(row, event)
      },
    },
  ];

  public plansDetails: any[] = [];

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 0;

  constructor(
    private router: Router,
    private subscriptionsService: SubscriptionsService,
    private confirmationService: ConfirmationService,
    private plansService: PlansService,
    private requestMessageService: RequestMessageService,
  ) { }

  ngOnInit(): void {
    this.getSubscriptionsList(this.pageIndex, this.pageLimit);
  }

  navigateToSubscriptionView(id: string): void {
    this.router.navigate([`painel/recorrencias/visualizar/${id}`]);
  }

  getSubscriptionsList(pageIndex: number, pageLimit: number): void {
    const pagination = `page=${pageIndex}&limit=${pageLimit}`;

    this.subscriptionsService.getSubscriptions(pagination).subscribe({
      next: (res) => {
        res.data.forEach((el: any) => {
          this.plansService.getPlan(el.plan).subscribe({
            next: (res) => {
              this.plansDetails.push({
                subscriptionName: res.data.plan.name,
                description: res.data.plan.description,
                chargeDay: res.data.billing.amount,
                value: res.data.billing.amount,
                id: el.id,
              });
            },
          })
        });
        this.totalRecords = res.pagination.totalItems;
      },
      error: (err) => {
      }
    });
  }

  deleteSubscription(row: any, event: Event) {
    this.confirmationService.confirm({
      target: event.target ? event.target : undefined,
      message: 'Deseja excluir a assinatura?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.subscriptionsService.deleteSubscription(row.id).subscribe({
          next: (res) => {
            this.requestMessageService.show(
              `Assinatura excluida com sucesso`,
              'success'
            );
            location.reload();
          },
          error: (err) => {},
        });
      },
    });
  }

  loadMoreItems(pageLimit: number) {
    this.getSubscriptionsList(this.pageIndex, pageLimit);
  }

}
