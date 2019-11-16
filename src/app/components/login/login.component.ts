import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { LoginUser } from 'src/app/models/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser = new LoginUser();

  constructor(private userS: UserServiceService) { }

  ngOnInit() {
  }

  login(){
    console.log('trying to login..');
    this.userS.login(this.loginuser);
  }

}
