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
  albums_img_length = []
  

  constructor(
    private usersService: UsersService,
    private authService: AuthService) { }



  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES

    this.checkLogged()
    this.getAlbums()
    this.getCountOfImages()
    localStorage.removeItem('selected_profile')
  }

  getAlbums() {
    let count = 0
    this.images.forEach(user_albums => {
      const albums = user_albums.albums
      this.albums_names.push(Object.keys(albums))
      const albums_names_for = Object.keys(albums)

      // this.albums_img_length[count] = []
      // albums_names_for.forEach(name => {
      //   const album = albums[name]
      //   this.albums_img_length[count].push(album.img.length)
      // })
      // count++
    })
  }

  getCountOfImages() {
    for(let i = 0; i < this.images.length; i++) {
      this.albums_img_length[i] = []
      for(const key in this.images[i].albums) {
        for(const k in this.images[i].albums[key]) {
          if(k == "img"){
            this.albums_img_length[i].push(this.images[i].albums[key].img.length)
          }
        }
      }
    }
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