import { environment } from './../../environments/environment';
import { Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private API_BASE = environment.API_BASE;

  constructor(private http: HttpClient) { }

  getClient(id: string) {
    return this.http.get(`${this.API_BASE}/users/${id}`);
  }

  getClients() {
    return this.http.get(`${this.API_BASE}/users`);
  }

  createClient(body: any) {
    return this.http.post(`${this.API_BASE}/users`, body);
  }
}
