import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.css']
})
export class TopUsersComponent implements OnInit {

  users
  images
  total_info = []

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.setTotal()
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

}
