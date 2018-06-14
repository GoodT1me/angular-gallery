import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-view-profile-another',
  templateUrl: './view-profile-another.component.html',
  styleUrls: ['./view-profile-another.component.css']
})
export class ViewProfileAnotherComponent implements OnInit {
  
  users = []
  private currentUser
  likesCont
  get_img_index
  img_index
  clicked_like = []

  constructor(private usersService:UsersService, private authService:AuthService) { }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.currentUser = this.usersService.getCurrentUser()
    this.clicked_like = []

    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
  }

  likes(id) {
    console.log(id)
    if(id in this.clicked_like) { }
    else {
      this.clicked_like.push(id)
      this.currentUser.likes[id]++
    }
    console.log(this.clicked_like)
  }

  addPhoto(id) {
    // this.currentUser.dbImg.push('https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png')
    // this.currentUser.likes[id] = 0
    // console.log("added id img " + id)
  }

  deletePhoto() {
    // delete photo
  }

  replacePhoto() {
    // replace Photo
  }
}
