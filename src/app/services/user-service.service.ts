import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';
// import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  loginUrl = 'http://localhost:8080/login';
  registerUrl = 'http://localhost:8080/register';
//  currentUserSubject: BehaviorSubject<NewUser>;

  constructor(private https: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<NewUser>(JSON.parse(localStorage.getItem('currentUser')));
  }

  login(user: LoginUser) {
    return this.https.post<any>(this.loginUrl, user);
          // .pipe(tap(res => console.log(res, res.headers.get('Authorization'))));
          // .pipe(map(NewUser => {
          //   localStorage.setItem('currentUser', JSON.stringify(NewUser));
          //   this.currentUserSubject.next(NewUser);
          //   return NewUser;
          // }));
  }

  logout() {
    console.log('Logging out..');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  register(user: NewUser) {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    //   });
    // const options = { headers };
    return this.https.post<any>(this.registerUrl, user);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUser() {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return ((this.getToken() != null) && (this.getUser() != null));
  }

}
