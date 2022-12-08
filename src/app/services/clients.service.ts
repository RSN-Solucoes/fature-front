import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private API_BASE = environment.API_BASE;

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${this.API_BASE}/users`);
  }
}
