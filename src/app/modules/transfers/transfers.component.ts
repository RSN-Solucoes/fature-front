import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';

import ptbrLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit, AfterViewInit {
  public title!: string;
  public actualDate = new Date();
  public calendarDate: any = this.actualDate.toISOString().substring(0, 10);

  public events: any[] = [
    {
      title: 'Event 1',
      date: '2023-03-12',
      color: '#55a1ff',
    },
    {
      title: 'Pago',
      date: '2023-03-12',
      color: '#02b69c',
    },
    {
      title: 'Event 2',
      date: '2023-03-01',
      color: '#55a1ff',
    },
  ];

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
  ) {}

  ngOnInit(): void {
    this.setDateTitle(this.actualDate);
  }

  ngAfterViewInit() {
    this.setCalendarLocale();
  }

  handleDateClick(arg: any): void {
    const calendarApi = this.calendarComponent.getApi();

    if(calendarApi.getDate().getMonth() === arg.date.getMonth()) {

      this.router.navigate(['painel/transferencias/listagem']);
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

    const currentDate = calendarApi.getDate();
    this.setDateTitle(currentDate);
  }

  previousMonth() {
    const calendarApi = this.calendarComponent.getApi();

    calendarApi.prev();

    const currentDate = calendarApi.getDate();
    this.setDateTitle(currentDate);
  }
}
