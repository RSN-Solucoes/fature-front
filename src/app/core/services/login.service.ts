import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginEndpoint = 'https://fature-api.herokuapp.com/auth/login';

  public _token = localStorage.getItem('token') || '';
  public token$: BehaviorSubject<string> = new BehaviorSubject(this._token);

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(this.loginEndpoint, data);
  }

  getToken() {
    localStorage.getItem('token');
  }

  createToken(token: string) {
    this.token$.next(token);
    localStorage.setItem('token', token);
  }

  updateToken(token: string) {
    this.token$.next(token);
    localStorage.setItem('token', token);
  }

  deleteToken() {
    this.token$.next('');
    localStorage.removeItem('token');
  }
}
