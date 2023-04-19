import { Component, OnInit } from '@angular/core';
import { PAYMENT_METHODS_SELECT_LIST } from '../../invoices/invoice-form/invoice-form.const';

@Component({
  selector: 'app-subscriptions-payment',
  templateUrl: './subscriptions-payment.component.html',
  styleUrls: ['./subscriptions-payment.component.scss']
})
export class SubscriptionsPaymentComponent implements OnInit {
  public paymentMethods: any = PAYMENT_METHODS_SELECT_LIST;
  public showCarnetInstallments: boolean = false;
  public displayForm: string = 'carnet';

  public days: any[] = [
    {
      day: 1
    },
    {
      day: 2
    },
  ];

  public installmentsData: any[] = [
    {
      installmentTitle: 'Parcela 1',
      value: 2173,
      dueDate: '20/11/2022',
      status: 'Aberto',
      barCode: '00190.00009 02996.786105 00006.182174 6 92950000008800'
    },
    {
      installmentTitle: 'Parcela 2',
      value: 2173,
      dueDate: '20/12/2022',
      status: 'Pago',
      barCode: '00190.00009 02996.786105 00006.182174 6 92950000008800'
    },
    {
      installmentTitle: 'Parcela 3',
      value: 2173,
      dueDate: '20/01/2023',
      status: 'Pago',
      barCode: '00190.00009 02996.786105 00006.182174 6 92950000008800'
    },
    {
      installmentTitle: 'Parcela 3',
      value: 2173,
      dueDate: '20/01/2023',
      status: 'Pago',
      barCode: '00190.00009 02996.786105 00006.182174 6 92950000008800'
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

  constructor() { }

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
