import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public tabIndex: number = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  changeIndex(event: any): void {
    this.tabIndex = event.index;
  }

  navigateNew(): void {
    if(this.tabIndex === 2) {

      this.router.navigate(['painel/configuracoes/colaboradores/novo']);
    };
  }
}
