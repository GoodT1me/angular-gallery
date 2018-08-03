import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-logged-profile',
  templateUrl: './logged-profile.component.html',
  styleUrls: ['./logged-profile.component.css']
})
export class LoggedProfileComponent implements OnInit {

  logged_id_user
  users = []
  images = []

  constructor(
    private authService:AuthService,
    private usersService:UsersService,
  ) {}

  ngOnInit() {
    this.logged_id_user = JSON.parse(localStorage.getItem('logged_user')).id_user
    this.images = this.usersService.IMAGES
    this.users = this.usersService.USERS
  }

  logOut() {
    this.authService.logOut()
    localStorage.removeItem('logged_user')
    localStorage.removeItem('isUserLoggedIn')
    this.usersService.logged_likes = [[], [], []]
  }
}
