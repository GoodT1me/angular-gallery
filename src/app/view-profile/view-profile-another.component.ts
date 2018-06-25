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
  like_not_ex
  file

  instruction = {
    replace_instruction: false,
    delete_instruction: false
  }

  constructor(private usersService:UsersService, private authService:AuthService) {
    this.delPhoto = false
    this.replacePhoto = false
  }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.current_gallery = localStorage.getItem('selected_gallery')
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
    this.file = localStorage.setItem('img', '../../assets/25.png')
  }

  likes(id) {
    if(this.usersService.logged_likes[this.current_gallery].includes(id)) {
    }
    else {
      if(this.authService.getUserLoggedIn()){
        this.usersService.logged_likes[this.current_gallery].push(id)
        this.users[this.current_gallery].likes[id]++
      }
    }
  }
  addPhoto(id) {
    // this.currentUser.dbImg.push('https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png')
    // this.currentUser.likes[id] = 0
  }

  deletePhoto(id) {
    if(this.delPhoto) {
      this.users[this.current_gallery].dbImg.splice(id, 1)
      this.users[this.current_gallery].likes.splice(id, 1)
    }else if(this.replacePhoto){
      this.replace_list.push(id)

      if(this.replace_list.length > 1) {
        let temp_images = this.users[this.current_gallery].dbImg
        let temp_likes = this.users[this.current_gallery].likes

        let temp_img = temp_images[this.replace_list[0]]
        temp_images[this.replace_list[0]] = temp_images[this.replace_list[1]]
        temp_images[this.replace_list[1]] = temp_img

        let temp_like = temp_likes[this.replace_list[0]]
        temp_likes[this.replace_list[0]] = temp_likes[this.replace_list[1]]
        temp_likes[this.replace_list[1]] = temp_like
        
        this.replace_list = []
      }
    }
  }

  onDeletePhoto() {
    this.delPhoto = true
    this.instruction.delete_instruction = true
  }

  onSaveDeleted(){
    this.delPhoto = false
    this.instruction.delete_instruction = false
  }

  onReplacePhoto() {
    this.replacePhoto = true
    this.instruction.replace_instruction = true
  }

  onSaveReplaced() {
    this.replacePhoto = false
    this.instruction.replace_instruction = false
    this.replace_list = []
  }

  pressedDelete() {
    if (this.deletePhoto) {
      return true
    }
    return false
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
