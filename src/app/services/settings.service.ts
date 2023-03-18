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

}
