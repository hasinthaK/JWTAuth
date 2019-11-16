import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newuser = new NewUser();
  USER: true;
  ADMIN: false;

  constructor(private userS: UserServiceService, private router: Router) { }

  ngOnInit() {
  }

  // addRole(role: string) {
  //   this.newuser.roles.push(role + `,`);
  // }

  register() {
    console.log(this.newuser);
    // this.userS.register(this.newuser)
    // .subscribe(
    //   res => {
    //     console.log(res);
    //     this.router.navigate(['/profile']);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

}
