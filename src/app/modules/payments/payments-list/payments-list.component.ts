import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {

  public billingData: any[] = [
    {
      installmentTitle: 'Parcela 1',
      value: 2173,
      dueDate: '20/11/2022',
      status: 'Aberto'
    },
    {
      installmentTitle: 'Parcela 2',
      value: 2173,
      dueDate: '20/12/2022',
      status: 'Pago'
    },
    {
      installmentTitle: 'Parcela 3',
      value: 2173,
      dueDate: '20/01/2023',
      status: 'Pago'
    },
    {
      installmentTitle: 'Parcela 3',
      value: 2173,
      dueDate: '20/01/2023',
      status: 'Pago'
    },
    {
      installmentTitle: 'Parcela 3',
      value: 2173,
      dueDate: '20/01/2023',
      status: 'Pago'
    },
    {
      installmentTitle: 'Parcela 3',
      value: 2173,
      dueDate: '20/01/2023',
      status: 'Pago'
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.router.navigate(['consultar']);
  }

}
