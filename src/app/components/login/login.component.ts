import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { LoginUser } from 'src/app/models/login-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser = new LoginUser();

  constructor(private userS: UserServiceService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  login() {
    console.log('trying to login..');
    this.userS.login(this.loginuser)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profile']);
        },
        err => {
          console.log(err);
          alert('Incorrect credentials!');
        }
      );
  }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}
