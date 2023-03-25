import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseHttpService {
  private API_BASE = environment.API_BASE;

  constructor(http: HttpClient) {
    super(http);
  }

  getDashboardData(period: string): Observable<any> {
    return this.get(`${this.API_BASE}/dashboard?${period}`);
  }
  
}
