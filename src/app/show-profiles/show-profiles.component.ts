import { Component, OnInit } from '@angular/core'
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-show-profiles',
  templateUrl: './show-profiles.component.html',
  styleUrls: ['./show-profiles.component.css']
})
export class ShowProfilesComponent implements OnInit{

  private logged_user_id
  users = []

  constructor(
    private usersService: UsersService,
    private authService: AuthService) { }

  showProfile(id) {
    this.usersService.setCurrentUser(this.users[id])
  }

  ngOnInit() {
    this.users = this.usersService.USERS
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
      this.logged_user_id = this.authService.getLoggedUserId()
    }
    localStorage.removeItem('selected_gallery')
  }
}