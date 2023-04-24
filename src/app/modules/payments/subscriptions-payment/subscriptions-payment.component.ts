import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';

@Component({
  selector: 'app-subscriptions-payment',
  templateUrl: './subscriptions-payment.component.html',
  styleUrls: ['./subscriptions-payment.component.scss']
})
export class SubscriptionsPaymentComponent implements OnInit {

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
  ) { }

  ngOnInit(): void {
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
      day: [null],
      year: [null]
    });
  }

  setExpirationDate(): void {
    const expirationDate = `${this.form.get('day')?.value}/${this.form.get('year')?.value}`

    this.form.get('card.expirationDate')?.setValue(expirationDate);
  }

  paySubscription(): void {
    const body = this.form.getRawValue();

    delete body.day;
    delete body.year;

    console.log(body)

    // this.paymentService.paySubscription(body).subscribe({
    //   next: (res) => {
    //     this.requestMessageService.show(
    //       `Assinatura paga com sucesso!`,
    //       'success'
    //     );
    //     console.log(res)
    //   },
    //   error: (err) => {
    //   }
    // });
  }

}
