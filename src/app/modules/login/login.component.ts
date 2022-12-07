import { Router } from '@angular/router';
import { LoginService } from './../../core/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginData = {
    email: 'contato.rsn@hotmail.com',
    password: '123456789',
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.loginService.login(this.loginData).subscribe({
      next: (res) => {
        console.log(res);

        this.loginService.createToken(res.data);

        this.router.navigate(['painel/clientes']);
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

}
