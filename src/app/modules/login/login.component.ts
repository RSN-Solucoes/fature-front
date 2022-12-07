import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../core/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public formSubmited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['contato.rsn@hotmail.com', [Validators.required, Validators.email]],
      password: ['123456789', Validators.required],
    });
  }

  submitForm() {
    this.formSubmited = !this.form.valid;

    if (!this.form.valid) return;

    this.loginService.login(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.loginService.createToken(res.data);

        this.router.navigate(['painel/clientes']);
      },
      error: (err) => {
        alert(err);
      },
    })
  }

}
