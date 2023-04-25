
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import { I_Client } from '../core/interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends BaseHttpService {
  private API_BASE = environment.API_BASE;

  constructor(http: HttpClient) {
    super(http);
  }

  getClient(id: string): Observable<any> {
    return this.get(`${this.API_BASE}/users/${id}`);
  }

  getClients(pagination: string): Observable<any> {
    return this.get(`${this.API_BASE}/users?${pagination}`);
  }

  createClient(body: I_Client): Observable<any> {
    return this.post(`${this.API_BASE}/users`, body);
  }

  updateClient(id: string, body: I_Client): Observable<any> {
    return this.patch(`${this.API_BASE}/users/${id}`, body);
  }

  deleteClient(id: string): Observable<any> {
    return this.delete(`${this.API_BASE}/users/${id}`);
  }

  getUserCEP(cep: string): Observable<any> {
    return this.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  getClientSentEmails(userId: string): Observable<any> {
    return this.get(`${this.API_BASE}/emails?userId=${userId}`);
  }
}
