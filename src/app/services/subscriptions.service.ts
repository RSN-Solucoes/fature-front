import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService extends BaseHttpService {
  private API_BASE = environment.API_BASE;

  constructor(http: HttpClient) { 
    super(http);
  }

  getSubscription(id: string): Observable<any> {
    return this.get(`${this.API_BASE}/subscriptions/${id}`);
  }

  getSubscriptions(pagination: string): Observable<any> {
    return this.get(`${this.API_BASE}/subscriptions?${pagination}`);
  }

  createSubscription(body: any): Observable<any> {
    return this.post(`${this.API_BASE}/subscriptions`, body);
  }

  deleteSubscription(id: string): Observable<any> {
    return this.delete(`${this.API_BASE}/subscriptions/${id}`);
  }
}
