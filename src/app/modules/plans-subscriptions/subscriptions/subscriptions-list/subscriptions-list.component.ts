import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  SUBSCRIPTIONS_COLUMNS,
  SUBSCRIPTIONS_FIELDS,
  SUBSCRIPTIONS_VALUE_SELECT_LIST,
  SUBSCRIPTIONS_PIPES,
} from '../subscriptions.const';

@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.scss']
})
export class SubscriptionsListComponent implements OnInit {

  public subscriptionsColumns = SUBSCRIPTIONS_COLUMNS;
  public subscriptionsFields = SUBSCRIPTIONS_FIELDS;
  public subscriptionsPipes = SUBSCRIPTIONS_PIPES;

  public subscriptions = SUBSCRIPTIONS_VALUE_SELECT_LIST;

  public subscriptionsActions = [
    {
      label: 'Visualizar',
      icon: 'pi-eye',
      action: (row: any) => {
        this.navigateToSubscriptionView();
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

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToSubscriptionView(): void {
    this.router.navigate(['painel/recorrencias/visualizar']);
  }

  loadMoreItems(pageLimit: number) {
    //function
  }

}
