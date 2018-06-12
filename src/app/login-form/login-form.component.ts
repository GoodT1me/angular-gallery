import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private usersService:UsersService) { }

  ngOnInit() {
  }

  loginUser(e) {
    let username = e.target.element[0].value
    let password = e.target.element[1].value
    console.log(username + "  " + password)

    if (username == this.usersService.USERS[0].userName && password == this.usersService.USERS[0].password) {
      this.usersService.setUserLoggedIn()
      this.router.navigate(['/'])
    }
  //   }else if (username == USERS[1].name && password == USERS[1].password) {
  //     this.user.setUserLoggedIn()
  //     this.router.navigate(['/'])
  // }
}
