import { environment } from './../../environments/environment';
import { Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private API_BASE = environment.API_BASE;

  constructor(private http: HttpClient) { }

  getClient(id: string): Observable<any> {
    return this.http.get(`${this.API_BASE}/users/${id}`);
  }

  getClients(): Observable<any> {
    return this.http.get(`${this.API_BASE}/users`);
  }

  createClient(body: any): Observable<any> {
    return this.http.post(`${this.API_BASE}/users`, body);
  }

  getUserCEP(cep: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
