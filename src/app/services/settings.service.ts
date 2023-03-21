import { BaseHttpService } from './base-http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends BaseHttpService {

  private API_BASE = environment.API_BASE;

  constructor(http: HttpClient) { 
    super(http);
  }

  getBankData(): Observable<any> {
    return this.get(`${this.API_BASE}/bank`);
  }

  updateBankData(body: any): Observable<any> {
    return this.patch(`${this.API_BASE}/bank`, body);
  }

  getCompanyData(): Observable<any> {
    return this.get(`${this.API_BASE}/client`) ;
  }

  updateCompanyData(body: any): Observable<any> {
    return this.patch(`${this.API_BASE}/client`, body);
  }

  getStatesAndCities(): Observable<any> {
    return this.get(
      'https://gist.githubusercontent.com/djalmaaraujo/3013866/raw/ca994a43520c0cb67baf007b1e66e925bef1bf5a/brazil-cities-states-en.json'
    );
  }

  getCustomizations(): Observable<any> {
    return this.get(`${this.API_BASE}/customization`) ;
  }

  updateCustomizations(body: any): Observable<any> {
    return this.patch(`${this.API_BASE}/customization`, body);
  }

  getEmployees(pagination: string): Observable<any> {
    return this.get(`${this.API_BASE}/employees?${pagination}`);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.get(`${this.API_BASE}/employees/${id}`);
  }

  createEmployee(body: any): Observable<any> {
    return this.post(`${this.API_BASE}/employees`, body);
  }

  updateEmployee(id: string, body: any): Observable<any> {
    return this.patch(`${this.API_BASE}/employees/${id}`, body);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.delete(`${this.API_BASE}/employees/${id}`)
  }

}
