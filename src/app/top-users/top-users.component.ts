import { Component, OnInit, AfterViewChecked } from '@angular/core'
import { UsersService } from '../users.service'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.css']
})
export class TopUsersComponent implements OnInit, AfterViewChecked {

  users
  images
  total_info = []
  on_name = false
  on_images = false
  on_albums = false
  on_likes = false

  constructor(private usersService: UsersService,) { }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.setTotal()
  }

  ngAfterViewChecked() {
    if(this.on_albums) {
      this.sortByAlbums()
    }else if(this.on_images) {
      this.sortByImages()
    }else if(this.on_likes) {
      this.sortByLikes()
    }else if(this.on_name) {
      this.sortByName()
    }
  }

  setTotal() {
    for(let i = 0; i < this.images.length; i++) {
      this.total_info.push({user: '', total_albums: 0, total_images: 0, total_likes: 0})
      this.total_info[i].total_albums = this.images[i].albums.length
      this.total_info[i].user = this.users[i].userName
      let images = 0
      let likes = 0
      for(let j = 0; j < this.images[i].albums.length; j++) {
        images += this.images[i].albums[j].img.length
        for(let k = 0; k < this.images[i].albums[j].likes.length; k++) {
          likes += this.images[i].albums[j].likes[k]
        }
      }
      this.total_info[i].total_images = images
      this.total_info[i].total_likes = likes
    }
    this.sortByLikes()
  }

  sortByLikes() {
    for (let i = 0; i < this.total_info.length - 1; i++) {
      for (let j = 0; j < this.total_info.length-i-1; j++) {
        if(this.total_info[j].total_likes < this.total_info[j+1].total_likes) {
          const temp = this.total_info[j]
          this.total_info[j] = this.total_info[j+1]
          this.total_info[j+1] = temp
        }
      }
    }
  }

  sortByAlbums() {
    for (let i = 0; i < this.total_info.length - 1; i++) {
      for (let j = 0; j < this.total_info.length-i-1; j++) {
        if(this.total_info[j].total_albums < this.total_info[j+1].total_albums) {
          const temp = this.total_info[j]
          this.total_info[j] = this.total_info[j+1]
          this.total_info[j+1] = temp
        }
      }
    }
  }

  sortByImages() {
    for (let i = 0; i < this.total_info.length - 1; i++) {
      for (let j = 0; j < this.total_info.length-i-1; j++) {
        if(this.total_info[j].total_images < this.total_info[j+1].total_images) {
          const temp = this.total_info[j]
          this.total_info[j] = this.total_info[j+1]
          this.total_info[j+1] = temp
        }
      }
    }
  }

  sortByName() {
    for (let i = 0; i < this.total_info.length - 1; i++) {
      for (let j = 0; j < this.total_info.length-i-1; j++) {
        if(this.total_info[j].user > this.total_info[j+1].user) {
          const temp = this.total_info[j]
          this.total_info[j] = this.total_info[j+1]
          this.total_info[j+1] = temp
        }
      }
    }
  }

  onName() {
    this.on_name = true
    this.on_albums = false
    this.on_images = false
    this.on_likes = false
  }

  onAlbums() {
    this.on_name = false
    this.on_albums = true
    this.on_images = false
    this.on_likes = false
  }

  onImages() {
    this.on_name = false
    this.on_albums = false
    this.on_images = true
    this.on_likes = false
  }

  onLikes() {
    this.on_name = false
    this.on_albums = false
    this.on_images = false
    this.on_likes = true
  }

}
