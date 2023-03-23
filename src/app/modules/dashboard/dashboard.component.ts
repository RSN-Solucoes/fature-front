import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public dashboardData!: any;

    public actualDate: Date = new Date();

    // Line Graphic
    public basicData: any = {
        labels: [],
        datasets: [],
    };
    public basicOptions: any = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057',
                    boxWidth: 20,
                    boxHeight: 20,
                    usePointStyle: true,
                    padding: 20,
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

    // Doughnut Graphic
    public data: any = {
        labels: ['Boleto','Crédito','Débito', 'Pix'],
        datasets: [
            {
                backgroundColor: [
                    "#02b69c",
                    "#6feaa7",
                    "#34e483",
                    "#6feaa7"
                ],
                hoverBackgroundColor: [
                    "#029781",
                    "#60ca90",
                    "#52ad7b",
                    "#60ca90",
                ]
            }
        ]
    };
    public chartOptions: any = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057',
                    boxWidth: 20,
                    boxHeight: 20,
                    usePointStyle: true,
                    padding: 20,
                },
                position: 'bottom',
                align: 'center',
            }
        },
    };

  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit(): void {
    this.setGraphicLabels(new Date().getMonth(), new Date().getFullYear());

    this.getDashboardData();
  }

  getDashboardData(): void {
    const firstMonthDate = new Date(
        this.actualDate.getFullYear(), this.actualDate.getMonth(), 1
    ).toLocaleDateString('en-US', {
        timeZone: "UTC",
        day: "2-digit",
        hour12: false,
        year: "numeric",
        month: "2-digit",
    });

    const lastMonthDate = new Date(
        this.actualDate.getFullYear(), this.actualDate.getMonth() + 1, 0
    ).toLocaleDateString('en-US', {
        timeZone: "UTC",
        day: "2-digit",
        hour12: false,
        year: "numeric",
        month: "2-digit",
    });
    
    const period = `startsAt=${firstMonthDate}&endsAt=${lastMonthDate}`;

    this.dashboardService.getDashboardData(period).subscribe({
        next: (res) => {
            this.dashboardData = res.data;

            this.basicData.datasets.push(
                this.setSubscriptionsGraphicData('new', res.data.subscriptions.new)
            );
            this.basicData.datasets.push(
                this.setSubscriptionsGraphicData('total', res.data.subscriptions.total)
            );

            this.data.datasets[0].data = this.setPaymentGraphicData(res.data.paymentMethods);
        },
        error: (err) => {
        }
    });
  }

  setSubscriptionsGraphicData(line: string, value: any): any {
    if(line == 'new') {
        return {
            label: 'Novos assinantes',
            data: this.generateSubscriptionDataValue(value),
            fill: false,
            borderColor: '#6feaa7',
            backgroundColor: '#6feaa7'
        }
    } else {
        return {
            label: 'Assinaturas ativas',
            data: this.generateSubscriptionDataValue(value),
            fill: false,
            borderColor: '#F38BE8',
            backgroundColor: '#F38BE8'
        };
    };
  }

  generateSubscriptionDataValue(value: any[]): any[] {
    const valuesLength = this.basicData.labels.length;
    const finalValues: any[] = [];

    for (let i = 0; i < valuesLength; i++) {
        finalValues[i] = 0;
    };

    value.forEach((el: any) => {
        let dateIndex = new Date(el.date).getDate() -1;

        finalValues[dateIndex] = el.total;
    });

    return finalValues;
  }

  setGraphicLabels(month: number, year: number): void {
    if ([0,2,4,6,7,9,11].includes(month)) {
        this.basicData.labels = [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            '31'
        ];
    };

    if ([3, 5, 8, 10].includes(month)) {
        this.basicData.labels = [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
        ];
    };

    if (month == 1 && year % 4 == 0) {
        this.basicData.labels = [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29'
        ];
    } else if (month == 1 && year % 4 !== 0) {
        this.basicData.labels = [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28'
        ];
    };
  }

  setPaymentGraphicData(paymentMethods: any): any[] {
    return [
        paymentMethods.bankSlip.total,
        paymentMethods.creditCard.total,
        paymentMethods.debitCard.total,
        paymentMethods.pix.total
    ];
  }

}
