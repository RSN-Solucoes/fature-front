import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-subscriptions-list',
  templateUrl: './plans-subscriptions-list.component.html',
  styleUrls: ['./plans-subscriptions-list.component.scss']
})
export class PlansSubscriptionsListComponent implements OnInit {

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
