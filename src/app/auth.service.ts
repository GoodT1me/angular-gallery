import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged_user
  private isUserLoggedIn

  constructor() {
    this.isUserLoggedIn = false
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn
  }

  logOut() {
    this.isUserLoggedIn = false
  }

  setLoggedUser(user) {
    this.logged_user = user
  }

  getLoggedUser() {
    return this.logged_user
  }
}
