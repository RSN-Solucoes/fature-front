import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseHttpService{
  private API_BASE = environment.API_BASE;

  constructor(http: HttpClient) { 
    super(http);
   }

  getInvoice(id: string): Observable<any> {
    return this.get(`${this.API_BASE}/invoices/${id}`);
  }

  getInvoices(pagination: string): Observable<any> {
    return this.get(`${this.API_BASE}/invoices?${pagination}`);
  }

  createInvoice(body: any): Observable<any> {
    return this.post(`${this.API_BASE}/invoices`, body);
  }

  updateInvoice(id: string, body: any): Observable<any> {
    return this.patch(`${this.API_BASE}/invoices/${id}`, body);
  }

  deleteInvoice(id: string): Observable<any> {
    return this.delete(`${this.API_BASE}/invoices/${id}`);
  }
}
