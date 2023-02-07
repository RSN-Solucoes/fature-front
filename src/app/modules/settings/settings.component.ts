import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

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
    ]
  }

  clearForm() {
    alert('clear form');
  }

  submitForm() {
    alert('submit form');
  }

}
