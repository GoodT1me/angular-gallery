import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsersService } from '../users.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup
  users = []
  private logged_user
  incorrect_auth = ''

  constructor(
    private router:Router,
    private usersService:UsersService,
    private formBuilder:FormBuilder,
    private authService:AuthService
  ) { }
  

  ngOnInit() {
    this.users = this.usersService.USERS

    this.form = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  login() {
    for(let i = 0; i < this.users.length; i++) {
      if(this.form.value.username == this.users[i].userName &&
         this.form.value.password == this.users[i].password) {
         this.logged_user = this.users[i]
         this.router.navigate([''])
         this.authService.setLoggedUser(this.users[i])
         this.authService.setUserLoggedIn()
         alert("You are logged")
      }
    }
    this.incorrect_auth = 'Invalid username or password'
  }
}
