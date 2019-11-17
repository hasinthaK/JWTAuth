import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';
// import { BehaviorSubject } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  loginUrl = 'http://localhost:8080/login';
  registerUrl = 'http://localhost:8080/users/register';
//  currentUserSubject: BehaviorSubject<NewUser>;

  constructor(private https: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<NewUser>(JSON.parse(localStorage.getItem('currentUser')));
  }

  login(user: LoginUser) {
    return this.https.post<any>(this.loginUrl, user); // Backened api must return the user with token
          // .pipe(map(NewUser => {
          //   localStorage.setItem('currentUser', JSON.stringify(NewUser));
          //   this.currentUserSubject.next(NewUser);
          //   return NewUser;
          // }));
  }

  logout() {
    console.log('Logging out..');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  register(user: NewUser) {
    console.log('Registering..');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
    const options = { headers };
    return this.https.post(this.registerUrl, user, options);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUser() {
    return localStorage.getItem('currentUser');
  }

  loggedIn(): boolean {
    return (!!this.getToken() && !!this.getUser());
  }

}
