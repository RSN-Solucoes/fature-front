import { Component, OnInit } from '@angular/core';
import { PAYMENT_METHODS_SELECT_LIST } from '../invoices/invoice-form/invoice-form.const';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})
export class CardPaymentComponent implements OnInit {
  public paymentMethods: any = PAYMENT_METHODS_SELECT_LIST;

  public displayForm: string = 'bankSlip';

  public days: any[] = [
    {
      day: 1
    },
    {
      day: 2
    },
  ];

  public installments: any[] = [
    {
      title: '2x R$ 165,00 (R$ 330,00)'
    },
    {
      title: '3x R$ 110,00 (R$ 330,00)'
    },
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  showMethodForm(paymentMethod: string): void {
    if(this.displayForm == paymentMethod) {
      this.displayForm = '';
      return;
    };

    this.displayForm = paymentMethod;
  }
}
