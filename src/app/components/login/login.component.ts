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

  constructor(private userS: UserServiceService,
              private router: Router
              ) {}

  ngOnInit() {
  }

  login() {
    console.log('trying to login..');
    this.userS.login(this.loginuser)
      .subscribe(
        // data => console.log(data),
        // err => console.log(err)
        response => {
          console.log(response);
          // localStorage.setItem('token', res.toString());
          // localStorage.setItem('currentUser', JSON.stringify(this.loginuser));
          this.router.navigate(['/profile']);
        },
        error => {
          console.log(error);
          alert('Incorrect credentials!');
        }
      );
  }

  gotoRegistration() {
    this.router.navigate(['/register']);
  }

}
