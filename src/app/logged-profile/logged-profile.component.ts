import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-logged-profile',
  templateUrl: './logged-profile.component.html',
  styleUrls: ['./logged-profile.component.css']
})
export class LoggedProfileComponent implements OnInit {

  private logged_user
  private logged_user_l
  constructor(private authService:AuthService) {
  }

  ngOnInit() {
    this.logged_user_l = JSON.parse(localStorage.getItem('logged_user'))
  }

  logOut() {
    this.authService.logOut()
    localStorage.removeItem('logged_user')
    localStorage.removeItem('isUserLoggedIn')
  }
}
