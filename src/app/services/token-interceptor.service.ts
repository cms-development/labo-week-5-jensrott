import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  getAccessToken(): string {
    return localStorage.getItem('token');
  }

  intercept(req, next) {
    const tokenizedReq = req.clone({
      setHeader: {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
