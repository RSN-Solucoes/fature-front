import { PlansService } from './../../../../services/plans.service';
import { Component, OnInit } from '@angular/core';
import { 
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

  public plans: any[] = [];

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

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 0;

  constructor(
    private plansService: PlansService,
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
          });
          console.log(res)
        });
      },
      error: (err) => {
      }
    })
  }

  loadMoreItems(pageLimit: number) {
    this.getPlans(this.pageIndex, pageLimit);
  }
}
