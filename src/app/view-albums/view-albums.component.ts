import { Component, OnInit } from '@angular/core'
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-albums',
  templateUrl: './view-albums.component.html',
  styleUrls: ['./view-albums.component.css']
})
export class ViewAlbumsComponent implements OnInit {

  users = []
  images = []
  current_albums
  private current_profile
  flag = false
  unflag = false

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.current_profile = localStorage.getItem('selected_profile')
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.replaceFlaggedAlbums()
    localStorage.removeItem('album_id')
  }

  onClickFlag() {
    this.flag = true
  }

  onClickUnFlag() {
    this.unflag = true
  }

  onSaveFlag() {
    this.flag = false
    this.unflag = false
    this.replaceFlaggedAlbums()
  }

  onClickAlbum(id) {
    if(this.flag) {
      this.makeFlagged(id)
    }else if(this.unflag) {
      this.makeUnFlagged(id)
    }else {
      this.authService.setSelectedAlbum(id)
      this.router.navigate(['albums/photo'])
    }
  }

  makeFlagged(id) {
    const albums = this.images[this.current_profile].albums
    for (let i = 0; i < albums.length; i++) {
      if(i == id) {
        albums[i].flag = true
      }
    }
  }

  makeUnFlagged(id) {
    const albums = this.images[this.current_profile].albums
    for (let i = 0; i < albums.length; i++) {
      if(i == id) {
        albums[i].flag = false
      }
    }
  }

  replaceFlaggedAlbums() {
    let flagged_albums = []
    let unflagged_albums = []
    const albums = this.images[this.current_profile].albums

    for (let i = 0; i < albums.length; i++) {
      if(albums[i].flag) {
        flagged_albums.push(albums[i])
      }else {
        unflagged_albums.push(albums[i])
      }
    }
    //sort flagged & unflagged albums
    for (let i = 0; i < flagged_albums.length - 1; i++) {
      for (let j = 0; j < flagged_albums.length-i-1; j++) {
        if(flagged_albums[j].id_album > flagged_albums[j+1].id_album) {
          const temp = flagged_albums[j]
          flagged_albums[j] = flagged_albums[j+1]
          flagged_albums[j+1] = temp
        }
      }
    }

    for (let i = 0; i < unflagged_albums.length - 1; i++) {
      for (let j = 0; j < unflagged_albums.length-i-1; j++) {
        if(unflagged_albums[j].id_album > unflagged_albums[j+1].id_album) {
          const temp = unflagged_albums[j]
          unflagged_albums[j] = unflagged_albums[j+1]
          unflagged_albums[j+1] = temp
        }
      }
    }

    this.images[this.current_profile].albums = (flagged_albums.concat(unflagged_albums))
  }
  
  compareLoggedProfileWithSelected() {
    if(this.authService.getUserLoggedIn()) {
      if(this.authService.getLoggedUserId() == this.current_profile){
        return true
      }
    }
    return false
  }

}
