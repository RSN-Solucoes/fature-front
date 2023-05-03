import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';

@Component({
  selector: 'app-subscriptions-payment',
  templateUrl: './subscriptions-payment.component.html',
  styleUrls: ['./subscriptions-payment.component.scss']
})
export class SubscriptionsPaymentComponent implements OnInit {

  public subscriptionId = this.activatedRoute.snapshot.paramMap.get('subscriptionId') || '';

  public days: any[] = [
    {
      day: 1
    },
    {
      day: 2
    },
  ];

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private requestMessageService: RequestMessageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (!this.subscriptionId) alert("Assinatura não encontrado");

    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      subscription: [null],
      card: this.fb.group({
        holder: [null],
        cardNumber: [null],
        expirationDate: [null],
        securityCode: [null],
      }),
    });
  }

  paySubscription(): void {
    this.form.get('subscription')?.setValue(this.subscriptionId);
    const body = this.form.getRawValue();

    console.log(body)

    this.paymentService.paySubscription(body).subscribe({
      next: (res) => {
        this.requestMessageService.show(
          `Assinatura paga com sucesso!`,
          'success'
        );
        console.log(res);
      },
      error: (err) => {
        this.requestMessageService.show(
          `Erro ao pagar assinatura!`,
          'error'
        );
        console.log(err);
      }
    });
  }

}
