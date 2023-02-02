import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

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
            label: 'Renovações',
            data: [38, 41, 48, 46, 35, 38, 61, 38, 32, 35, 32, 40],
            fill: false,
            borderColor: '#F38BE8',
        },
        {
            label: 'Novos Assinantes',
            data: [18, 22, 18, 23, 23, 32, 38, 52, 38, 35, 28, 45],
            fill: false,
            borderColor: '#6feaa7',
        },
        {
            label: 'Cancelamento',
            data: [28, 48, 40, 19, 86, 27, 90, 25, 22, 44, 58, 74],
            fill: false,
            borderColor: '#9449f4',
        }
      ]
    };


    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                //   color: '#495057',
                //   boxWidth: 3,
                //   boxHeight: 4,
                //   useBorderRadius: true,
                //   borderRadius: 1,
              },
              position: 'bottom',
              align: 'start',
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
                  "#02b69c",
                  "#6feaa7",
                  "#34e483"
              ],
              hoverBackgroundColor: [
                  "#029781",
                  "#60ca90",
                  "#52ad7b"
              ]
          }
      ]
    };

    this.chartOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057',
                    boxWidth: 15,
                    boxHeight: 15,
                },
                position: 'bottom',
                align: 'center',
            }
        },
      };
  }

}
