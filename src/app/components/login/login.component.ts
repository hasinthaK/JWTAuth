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
  loading = false;
  jwt: string = null;
  username: string = null;

  constructor(private userS: UserServiceService,
              private router: Router
              ) {}

  ngOnInit() {
  }

  login() {
    this.loading = true;
    console.log('trying to login..', this.loginuser.username);
    this.userS.login(this.loginuser)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.jwt);
          localStorage.setItem('username', res.username);
          // localStorage.setItem('token', res.toString());
          // localStorage.setItem('currentUser', JSON.stringify(this.loginuser));
          this.router.navigate(['/profile']);
        },
        err => {
          console.log(err);
          alert('Incorrect credentials!');
        }
      );
    this.loading = false;
  }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}
