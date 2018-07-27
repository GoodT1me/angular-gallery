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

  // form: FormGroup
  // users = []
  // private logged_user
  // incorrect_auth = ''
  // private is_logged = false
  // count_attempt = 1

  users = []
  private logged_user
  private is_logged = false
  count_attempt = 0
  auth_error = false
  model: any = {}

  constructor(
    private router:Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }
  

  // ngOnInit() {
  //   this.users = this.usersService.USERS
  //   this.is_logged = this.authService.getUserLoggedIn()
  //   this.form = this.formBuilder.group({
  //     username: '',
  //     password: ''
  //   })
  // }

  // login() {
  //   for(let i = 0; i < this.users.length; i++) {
  //     if(this.form.value.username == this.users[i].userName &&
  //        this.form.value.password == this.users[i].password) {
  //        this.logged_user = this.users[i]
  //        this.router.navigate([''])
  //        this.authService.setLoggedUser(this.users[i])
  //        this.authService.setUserLoggedIn()
  //        location.reload()
  //     }else{
  //       this.incorrect_auth = ("Invalid username or password - Attempt(" + this.count_attempt +")")
  //     }
  //   }
  //   this.form = this.formBuilder.group({
  //     username: '',
  //     password: ''
  //   })
  //   this.count_attempt++
  // }


  ngOnInit() {
    this.users = this.usersService.USERS
    this.is_logged = this.authService.getUserLoggedIn()
    this.model.userName = ''
    this.model.password = ''
  }

  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    for(let i = 0; i < this.users.length; i++) {
      if(this.model.userName == this.users[i].userName &&
         this.model.password == this.users[i].password) {
        this.auth_error = false
        this.logged_user = this.users[i]
        this.authService.setLoggedUser(this.users[i])
        this.authService.setUserLoggedIn()
        this.router.navigate([''])
        location.reload()
        break
      }else{
        this.auth_error = true
        console.log(1)
      }
    }
    this.count_attempt++
  }
}
