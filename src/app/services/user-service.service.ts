import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';
// import { BehaviorSubject } from 'rxjs';
import { tap, map, first } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

private  loginUrl = 'http://localhost:8080/login';
private  registerUrl = 'http://localhost:8080/register';
//  currentUserSubject: BehaviorSubject<NewUser>;
  // testUrl = '../assets/test.json';
private currentUser = new BehaviorSubject<any>(this.getUser);
public currentUsername = this.currentUser.asObservable();


  constructor(private https: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<NewUser>(JSON.parse(localStorage.getItem('currentUser')));
  }

  public get currentUsernameValue() {
    return this.currentUser.value;
  }

  login(user: LoginUser) {
    return this.https.post<any>(this.loginUrl, user)
    .pipe(map(res => {
          console.log(res);
          localStorage.setItem('token', res.jwt);
          localStorage.setItem('username', res.username);
          this.currentUser.next(res.username);
          return res;
    }));
          // JWTSecurity 2 - returns jwt + fName
          // .pipe(tap(res => console.log(res, res.headers.get('Authorization'))));
          // .pipe(map(NewUser => {
          //   localStorage.setItem('currentUser', JSON.stringify(NewUser));
          //   this.currentUserSubject.next(NewUser);
          //   return NewUser;
          // }));
  }

  // testLogin() {
  //   return this.https.get<any>(this.testUrl)
  //   .pipe(map(res => {
  //       localStorage.setItem('token', res.jwt);
  //       localStorage.setItem('username', res.username);
  //       console.log('testLogin');
  //   }));
  // }

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

  getUser(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return ((this.getToken() != null) && (this.getUser() != null));
  }

}
