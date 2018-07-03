import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedIn

  constructor() {
    this.isUserLoggedIn = false
  }

  setUserLoggedIn() {
    localStorage.setItem('isUserLoggedIn', 'true')
    this.isUserLoggedIn = true
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn
  }

  logOut() {
    this.isUserLoggedIn = false
  }

  setLoggedUser(user) {
    localStorage.setItem('logged_user', JSON.stringify(user));
  }

  getLoggedUserId(){
    var user = JSON.parse(localStorage.getItem('logged_user'))
    return user.id_user
  }

}
