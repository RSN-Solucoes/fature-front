import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {  

  // Line Graphic
  public basicData: any;
  public basicOptions: any;

  // Doughnut Graphic
  public data: any;
  public chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.basicData = {
      labels: [
        'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL',
        'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
      ],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40, 85, 55, 56, 28, 34],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90, 25, 22, 44, 58, 74],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
    };

    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
    };

    // Doughnut
    this.data = {
      labels: ['Débito','Boleto','Carnê'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }
      ]
    };
  }

}
