import { Component, OnInit } from '@angular/core';
import { 
  PLANS_VALUE_SELECT_LIST,
  PLANS_COLUMNS,
  PLANS_FIELDS,
  PLANS_PIPES,
 } from '../plans.const';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.scss']
})
export class PlansListComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
