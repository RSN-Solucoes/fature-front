import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  private API_BASE = environment.API_BASE;

  constructor() {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (httpRequest.url.includes(this.API_BASE)) {
      return next.handle(
        httpRequest.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        })
      );
    } else {
      return next.handle(httpRequest.clone());
    }
  }
}
