import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestLoadingService } from 'src/app/shared/components/request-loading/request-loading.service';

import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  private API_BASE = environment.API_BASE;

  constructor(private requestLoadingService: RequestLoadingService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    this.requestLoadingService.show();

    if (httpRequest.url.includes(this.API_BASE)) {
      return next
        .handle(
          httpRequest.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          })
        )
        .pipe(
          tap((evt) => {
            if (evt instanceof HttpResponse) {
              this.requestLoadingService.hide();
            }
          }),
          catchError((err: any) => {
            if (err instanceof HttpErrorResponse)
              this.requestLoadingService.hide();

            return of(err);
          })
        );
    } else {
      this.requestLoadingService.hide();

      return next.handle(httpRequest.clone());
    }
  }
}
