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
  images = []
  searchUser = ''

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES

    this.checkLogged()
    localStorage.removeItem('selected_profile')
  }

  checkLogged() {
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
      this.logged_user_id = this.authService.getLoggedUserId()
    }
  }

  showUserAlbums(id) {
    this.usersService.setCurrentUser(this.users[id])
  }

}