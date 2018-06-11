import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-view-profile-another',
  templateUrl: './view-profile-another.component.html',
  styleUrls: ['./view-profile-another.component.css']
})
export class ViewProfileAnotherComponent implements OnInit {
  
  users = []
  currentUser
  likesCont
  get_img_index
  img_index

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.currentUser = this.usersService.getCurrentUser()
    // this.get_img_index = this.currentUser.dbImg.indexOf(this.img_index)
    console.log(this.currentUser.likes)
  }


  likes() {
    // add +1 like
  }

  addPhoto() {
    // upload photo
    // this.currentUser.dbImg.push('url')
  }

  deletePhoto() {
    // delete photo
  }

  replacePhoto() {
    // replace Photo
  }

}
