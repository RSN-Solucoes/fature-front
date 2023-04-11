import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class PlansService extends BaseHttpService {
  private API_BASE = environment.API_BASE;

  constructor(http: HttpClient) { 
    super(http);
  }

  getPlan(id: string): Observable<any> {
    return this.get(`${this.API_BASE}/plans/${id}`);
  }

  getPlans(pagination: string): Observable<any> {
    return this.get(`${this.API_BASE}/plans?${pagination}`);
  }

  createPlan(body: any): Observable<any> {
    return this.post(`${this.API_BASE}/plans`, body);
  }

  deletePlan(id: string): Observable<any> {
    return this.delete(`${this.API_BASE}/plans/${id}`);
  }
}
