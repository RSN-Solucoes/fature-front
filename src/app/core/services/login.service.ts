import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_BASE = environment.API_BASE;

  public _token = localStorage.getItem('token') || '';
  public token$: BehaviorSubject<string> = new BehaviorSubject(this._token);

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.API_BASE}/auth/login`, data);
  }

  checkToken(token: string | null): Observable<any> {
    return this.http.get(`${this.API_BASE}/auth/token/${token}`);
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
