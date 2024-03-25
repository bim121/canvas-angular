import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private readonly _authService: AuthService) {}
  
    public intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      if (this._authService.isAuthorized) {
        const newReq = request.clone({
          headers: request.headers.append(
            'Authorization',
            'Bearer ' + this._authService.token
          ),
        });
        return next.handle(newReq);
      } else {
        throw new Error('Not authorized');
      }
    }
  }