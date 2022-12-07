import { Router } from '@angular/router';
import { LoginService } from './core/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public token: string | null = localStorage.getItem('token');
  
  title = 'fature-front';

  constructor(
    private loginService: LoginService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.loginService.token$.subscribe((token) => {
      this.token = token;
    });
  }
}
