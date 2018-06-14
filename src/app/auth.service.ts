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

  logOut() {
    this.isUserLoggedIn = false
  }

  setLoggedUser(user) {
    localStorage.setItem('logged_user', JSON.stringify(user));
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn
  }
}
