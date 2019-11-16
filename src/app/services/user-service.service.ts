import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  loginUrl = 'loginUrl';
  constructor(private https: HttpClient) { }

  login(user: LoginUser){
    console.log('Trying to login..');
    this.https.post(this.loginUrl, user)
    .subscribe(
      res => { console.log(res); },
      err => { console.error(err); }
      );
  }

}
