import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss']
})
export class CompanyDataComponent implements OnInit {

  public ufList = [
    {
      name: 'São Paulo',
      value: 'SP'
    },
    {
      name: 'Bahia',
      value: 'BA'
    },
    {
      name: 'Rio de Janeiro',
      value: 'RJ'
    },
    {
      name: 'Minas Gerais',
      value: 'MG'
    },
  ];

  public cityList = [
    {
      name: 'Salto',
    },
    {
      name: 'São Paulo',
    },
    {
      name: 'Indaiatuba',
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  clearForm() {
    alert('clear form');
  }

  submitForm() {
    alert('submit form');
  }

}
