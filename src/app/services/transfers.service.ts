import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransfersService extends BaseHttpService{
  private API_BASE = environment.API_BASE;

  constructor(http: HttpClient) { 
    super(http);
  }

  getMonthTransfers(month: number, year: number): Observable<any> {
    return this.get(`${this.API_BASE}/transfers?month=${month}&year=${year}`);
  }

  getDailyTransfers(pagination: string): Observable<any> {
    return this.get(`${this.API_BASE}/transfers/details?${pagination}`);
  }
}
