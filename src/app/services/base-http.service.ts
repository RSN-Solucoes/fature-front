import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, take, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor(private http: HttpClient) {}

  public get(request: string): Observable<any> {
    return this.http.get(request).pipe(
      take(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public post(request: string, body: any) {
    return this.http.post(request, body).pipe(
      take(1),

      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public patch(request: string, body: any) {
    return this.http.patch(request, body).pipe(
      take(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public delete(request: string) {
    return this.http.delete(request).pipe(
      take(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
