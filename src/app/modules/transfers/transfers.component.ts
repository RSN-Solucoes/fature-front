import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  public title!: string;

  public events: any[] = [
    {
      title: 'Event 1',
      date: '2022-04-01'
    },
    {
      title: 'Event 2',
      date: '2022-12-01'
    },
  ];

  
  calendarOptions: CalendarOptions = {
    headerToolbar: false,
    initialDate: new Date(),
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
    
    this.title = `${months[month]} ${currentDate.getFullYear()}`;
  }

  nextMonth() {
    const calendarApi = this.calendarComponent.getApi();

    calendarApi.next();

    if(this.events.length != 0) {
      this.events = [];
    };
    
    const currentDate = calendarApi.getDate();
    this.setDateTitle(currentDate);
  }

  previousMonth() {
    const calendarApi = this.calendarComponent.getApi();
    
    calendarApi.prev();

    if(this.events.length != 0) {
      this.events = [];
    };

    const currentDate = calendarApi.getDate();
    this.setDateTitle(currentDate);
  }

}
