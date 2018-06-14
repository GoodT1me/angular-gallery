import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-logged-profile',
  templateUrl: './logged-profile.component.html',
  styleUrls: ['./logged-profile.component.css']
})
export class LoggedProfileComponent implements OnInit {

  private logged_user
  constructor(private authService:AuthService) {
    this.logged_user = this.authService.getLoggedUser()
  }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut()
  }
}
