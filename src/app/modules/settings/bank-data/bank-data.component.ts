import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-data',
  templateUrl: './bank-data.component.html',
  styleUrls: ['./bank-data.component.scss']
})
export class BankDataComponent implements OnInit {

  public agencyOptions!: any[];
  public accountType!: any[];
  public frequency!: any[];

  constructor() { }

  ngOnInit(): void {
    this.agencyOptions = [
      {
        name: 'Agência 1'
      },
      {
        name: 'Agência 2'
      },
      {
        name: 'Agência 3'
      },
    ];

    this.accountType = [
      {
        name: 'Conta corrente',
        sigla: 'CC',
      },
    ];

    this.frequency = [
      {
        title: 'Semanal',
        value: 'weekly'
      },
      {
        title: 'Mensal',
        value: 'monthly'
      },
      {
        title: 'Anual',
        value: 'yearly'
      },
    ];
  }

  clearForm() {
    alert('clear form');
  }

  submitForm() {
    alert('submit form');
  }
}
