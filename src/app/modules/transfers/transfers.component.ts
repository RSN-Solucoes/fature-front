import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  public title!: string;
  public actualDate = new Date();
  public calendarDate: any = this.actualDate.toISOString().substring(0,10);

  public events: any[] = [
    {
      title: 'Event 1',
      date: '2022-12-12',
    },
    {
      title: 'Pago',
      date: '2022-12-12',
      color: '#5f3',
    },
    {
      title: 'Event 2',
      date: '2022-12-01',
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
  
  constructor() { }

  ngOnInit(): void {
    this.setDateTitle(this.actualDate);
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }

  setDateTitle(currentDate: any) {
    const month = currentDate.getMonth()
    const months = [
      'Janeiro', 'Fevereiro', 'Março',
      'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 
      'Novembro', 'Dezembro'
    ];
    
    this.title = `${months[month]}`;
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
