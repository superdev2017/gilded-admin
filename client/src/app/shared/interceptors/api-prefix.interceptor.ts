import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({ url: request.url });
    request.headers.append('Access-Control-Allow-Origin', '*');
    request.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    return next.handle(request);
  }
}
