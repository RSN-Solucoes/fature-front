import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  PLANS_COLUMNS,
  PLANS_FIELDS,
  PLANS_PIPES,
  PLANS_VALUE_SELECT_LIST,
  SUBSCRIPTIONS_COLUMNS,
  SUBSCRIPTIONS_FIELDS,
  SUBSCRIPTIONS_VALUE_SELECT_LIST,
  SUBSCRIPTIONS_PIPES,
} from './recurrence-list.const';

@Component({
  selector: 'app-recurrence-list',
  templateUrl: './recurrence-list.component.html',
  styleUrls: ['./recurrence-list.component.scss']
})
export class RecurrenceListComponent implements OnInit {
  public plansColumns = PLANS_COLUMNS;
  public plansFields = PLANS_FIELDS;
  public plansPipes = PLANS_PIPES;

  public plans = PLANS_VALUE_SELECT_LIST;

  public plansActions = [
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

  public subscriptionsColumns = SUBSCRIPTIONS_COLUMNS;
  public subscriptionsFields = SUBSCRIPTIONS_FIELDS;
  public subscriptionsPipes = SUBSCRIPTIONS_PIPES;

  public subscriptions = SUBSCRIPTIONS_VALUE_SELECT_LIST;

  public subscriptionsActions = [
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

  public tabIndex: number = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  

  changeIndex(event: any): void {
    this.tabIndex = event.index;
  }

  navigateToForm(): void {
    this.tabIndex === 0 
      ? this.router.navigate(['painel/recorrencias/planos/novo'])
      : this.router.navigate(['painel/recorrencias/assinaturas/novo']);
  }

}
