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
  private current_gallery
  likesCont
  get_img_index
  img_index
  clicked_like = []
  delPhoto
  replacePhoto
  replace_list = []

  constructor(private usersService:UsersService, private authService:AuthService) {
    this.delPhoto = false
    this.replacePhoto= false
  }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.current_gallery = localStorage.getItem('selected_gallery')
    this.clicked_like = []

    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
  }

  likes(id) {
    if(id in this.clicked_like) { }
    else {
      if(this.authService.getUserLoggedIn()){
        this.clicked_like.push(id)
        this.users[this.current_gallery].likes[id]++
      }
    }
  }

  addPhoto(id) {
    // this.currentUser.dbImg.push('https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png')
    // this.currentUser.likes[id] = 0
    // console.log("added id img " + id)
  }

  deletePhoto(id) {
    if(this.delPhoto) {
      this.users[this.current_gallery].dbImg.splice(id, 1)
      this.users[this.current_gallery].likes.splice(id, 1)
    }else if(this.replacePhoto){
      this.replace_list.push(id)
      console.log(this.replace_list)
    }
  }

  onDeletePhoto() {
    this.delPhoto = true
  }

  onSaveDeleted(){
    this.delPhoto = false
  }

  onReplacePhoto() {
    this.replacePhoto = true
  }

  onSaveReplaced() {
    this.replacePhoto = false
  }

  checkUserGallery() {
    if(this.authService.getUserLoggedIn()){
      if(this.current_gallery == this.authService.getLoggedUserId()) {
        return true
      }
      return false
    }
  }
}
