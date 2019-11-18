import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  // currentUser = new NewUser();
  // token: string;

  constructor(private userS: UserServiceService) {
    // this.currentUser = JSON.parse(userS.getUser());
    // this.token = userS.getToken();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.userS.isLoggedIn()) {
      const reqWithToken = req.clone({
        setHeaders: {
          Authorization: this.userS.getToken()
        }
      });
      return next.handle(reqWithToken);
    }
  }

}
