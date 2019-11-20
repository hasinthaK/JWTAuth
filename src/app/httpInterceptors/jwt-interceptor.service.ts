import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
// import { fromPromise } from 'rxjs/observable/fromPromise';
import { UserServiceService } from '../services/user-service.service';
import { switchMap } from 'rxjs/operators';

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

    console.log('Interceptor working..');

    if (this.userS.isLoggedIn()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.userS.getToken()
        }
      });
    }

    return next.handle(req);

  // return from(this.userS.getToken())
  // .pipe(
  //         switchMap(token => {
  //           const reqWithToken = req.clone({
  //             setHeaders: {
  //               Authorization: token
  //             }
  //           });
  //           return next.handle(reqWithToken);
  //         })
  //       );

        // this.userS.getToken()
        //     .then(token => {
        //         console.log(token);
        //         const reqClone = req.clone({
        //             headers: req.headers
        //                     .set('Authorization', token)
        //         });
        //         console.log(reqClone);
        //         return next.handle(reqClone);
        //     })
        //     .catch((err)=>{
        //         console.log('error in interceptor' + err);
        //         return null;
        //     });


  }

}
