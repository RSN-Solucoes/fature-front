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
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.loginService.login(this.loginData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {

      },
    })
  }

}
