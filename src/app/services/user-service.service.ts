import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  loginUrl = 'loginUrl';
  registerUrl = 'registerUrl';

  constructor(private https: HttpClient) { }

  login(user: LoginUser) {
    console.log('Trying to login..');
    return this.https.post(this.loginUrl, user);
  }

  register(user: NewUser) {
    console.log('Registering..');
    return this.https.post(this.registerUrl, user);
  }

}
