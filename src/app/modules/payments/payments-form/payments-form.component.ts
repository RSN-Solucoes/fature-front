import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-form',
  templateUrl: './payments-form.component.html',
  styleUrls: ['./payments-form.component.scss']
})
export class PaymentsFormComponent implements OnInit {

  public emailSubmitted: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  handleInput(event: any) {
    const input = event.target;
    if (input.nextElementSibling && input.value) {
      input.nextElementSibling.focus();
    };
  }

  navigateToPaymentsList(): void {
    this.router.navigate(['consultar/dados']);
  }
}
