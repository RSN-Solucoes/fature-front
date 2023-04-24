import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BaseHttpService {
  private API_BASE = environment.API_BASE;

  constructor(http: HttpClient) { 
    super(http);
  }

  paySubscription(body: any): Observable<any> {
    return this.post(`${this.API_BASE}/subscription/pay`, body);
  }
  
}
