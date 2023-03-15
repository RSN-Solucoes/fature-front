import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-payments',
  templateUrl: './check-payments.component.html',
  styleUrls: ['./check-payments.component.scss']
})
export class CheckPaymentsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToPaymentsData(): void {
    this.router.navigate(['consultar/dados']);
  }

}
