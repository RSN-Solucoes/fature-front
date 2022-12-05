import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginEndpoint = 'https://fature-api.herokuapp.com/auth/login';

  constructor(private http: HttpClient) { }

  login(adminCredentials: any): Observable<any> {
    return this.http.post(this.loginEndpoint, adminCredentials);
  }
}
