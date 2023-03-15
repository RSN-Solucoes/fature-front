import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-payments',
  templateUrl: './check-payments.component.html',
  styleUrls: ['./check-payments.component.scss']
})
export class CheckPaymentsComponent implements OnInit {

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
    }
  }

  navigateToPaymentsData(): void {
    this.router.navigate(['consultar/dados']);
  }
}
