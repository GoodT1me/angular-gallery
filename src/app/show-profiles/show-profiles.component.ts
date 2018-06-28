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
  albums_names = []

  constructor(
    private usersService: UsersService,
    private authService: AuthService) { }

  showProfile(id) {
    this.usersService.setCurrentUser(this.users[id])
  }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
      this.logged_user_id = this.authService.getLoggedUserId()
    }
    localStorage.removeItem('selected_gallery')
    this.getAlbumNames()
    console.log(this.albums_names)

  }

  getAlbumNames() {
    this.images.forEach((user_albums) => {
      const albums = user_albums.albums
      this.albums_names.push(Object.keys(albums))
      this.albums_names.forEach((name) => {
        const album = albums[name]
      })
    })
  }
}