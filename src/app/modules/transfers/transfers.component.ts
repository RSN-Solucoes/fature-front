import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';

import ptbrLocale from '@fullcalendar/core/locales/pt-br';
import { TransfersService } from 'src/app/services/transfers.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit, AfterViewInit {
  public title!: string;
  public actualDate = new Date();
  public calendarDate: any = this.actualDate.toISOString().substring(0, 10);

  public transfers!: any;

  public events: any[] = [];

  calendarOptions: CalendarOptions = {
    headerToolbar: false,
    initialDate: this.calendarDate,
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: this.events,
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  constructor(
    private router: Router,
    private transfersService: TransfersService,
  ) {}

  ngOnInit(): void {
    this.setDateTitle(this.actualDate);

    this.getTransfers(this.actualDate);
  }

  getTransfers(date: Date): void {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    console.log(date)

    this.transfersService.getMonthTransfers(month, year).subscribe({
      next: (res) => {
        this.transfers = res.data;    
      
        res.data.deposits.forEach((el: any) => {
          this.events.push({
            title: el.message,
            date: el.date,
            color: '#02b69c',
          });
        });
        console.log(this.events)
      },
      error: (err) => {
      }
    });
  }

  ngAfterViewInit() {
    if(this.events.length > 0) {
      this.setCalendarLocale();

    }
  }

  handleDateClick(arg: any): void {
    const calendarApi = this.calendarComponent.getApi();

    if(calendarApi.getDate().getMonth() === arg.date.getMonth()) {
      console.log(arg)

      this.router.navigate([`painel/transferencias/listagem/${arg.dateStr}`]);
    };
  }

  setDateTitle(currentDate: any) {
    const month = currentDate.getMonth();
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    this.title = `${months[month]}`;
  }

  setCalendarLocale() {
    const calendarApi = this.calendarComponent.getApi();

    calendarApi.setOption('locale', ptbrLocale);
  }

  nextMonth() {
    const calendarApi = this.calendarComponent.getApi();

    calendarApi.next();

    if(this.events.length != 0) {
      this.events = [];
    };

    const currentDate = calendarApi.getDate();

    console.log(currentDate);
    this.getTransfers(currentDate);
    this.setDateTitle(currentDate);
  }

  previousMonth() {
    const calendarApi = this.calendarComponent.getApi();

    calendarApi.prev();

    if(this.events.length != 0) {
      this.events = [];
    };

    const currentDate = calendarApi.getDate();

    console.log(currentDate);
    this.getTransfers(currentDate);
    this.setDateTitle(currentDate);
  }
}
