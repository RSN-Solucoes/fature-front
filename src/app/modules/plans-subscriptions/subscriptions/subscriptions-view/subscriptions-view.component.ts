import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions-view',
  templateUrl: './subscriptions-view.component.html',
  styleUrls: ['./subscriptions-view.component.scss']
})
export class SubscriptionsViewComponent implements OnInit {

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
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['painel/recorrencias']);
  }
}
