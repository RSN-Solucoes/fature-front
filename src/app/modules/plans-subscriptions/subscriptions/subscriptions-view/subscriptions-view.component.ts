import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import { PlansService } from 'src/app/services/plans.service';

@Component({
  selector: 'app-subscriptions-view',
  templateUrl: './subscriptions-view.component.html',
  styleUrls: ['./subscriptions-view.component.scss']
})
export class SubscriptionsViewComponent implements OnInit {

  public subscriptionId = this.activatedRoute.snapshot.paramMap.get('id') || '';
  public subscriptionViewData!: any;
  public planSubscriptionData!: any;

  public billingHistory: any[] = [
    {
      date: '05-11-2022',
      total: 299
    },
    {
      date: '05-11-2022',
      total: 299
    },
    {
      date: '05-11-2022',
      total: 299
    },
  ];

  constructor(
    private router: Router,
    private subscriptionsService: SubscriptionsService,
    private activatedRoute: ActivatedRoute,
    private plansService: PlansService,
  ) { }

  ngOnInit(): void {
    this.getSubscription();
  }

  getSubscription() {
    this.subscriptionsService.getSubscription(this.subscriptionId).subscribe({
      next: (res) => {
        console.log(res)
        this.plansService.getPlan(res.data.plan).subscribe({
          next: (el) => {
            this.subscriptionViewData = res.data;
            this.planSubscriptionData = el.data;
          },
        })
      },
      error: (err) => {
      }
    });
  }

  cancel(): void {
    this.router.navigate(['painel/recorrencias']);
  }
}