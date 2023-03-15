import { Router, UrlTree } from '@angular/router';
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

      this.checkToken();
    });

    setInterval(() => this.checkToken(), 1000 * 1800);
  }

  checkToken() {
    const url = location.href;

    if (
      String(url).includes('pagar') ||
      String(url).includes('consultar') ||
      String(url).includes('faturas')
    ) {
      this.token = null;

      return;
    }

    this.loginService.checkToken(this.token).subscribe({
      next: (valid) => {
        if (!valid) this.loggout();
      },
      error: () => this.loggout(),
    });
  }

  loggout() {
    this.token = null;
    this.loginService.deleteToken();
    this.router.navigate(['login']);
  }
}
