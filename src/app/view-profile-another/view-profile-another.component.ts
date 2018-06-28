import { Component, OnInit, ChangeDetectionStrategy, AfterContentInit } from '@angular/core';
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-view-profile-another',
  templateUrl: './view-profile-another.component.html',
  styleUrls: ['./view-profile-another.component.css']
})
export class ViewProfileAnotherComponent implements OnInit, AfterContentInit {
  
  users = []
  images = []
  private current_gallery
  likesCont
  get_img_index
  img_index
  clicked_like = []
  delPhoto = false
  replacePhoto = false
  replace_list = []

  instruction = {
    replace_instruction: false,
    delete_instruction: false
  }

  constructor(
    private usersService:UsersService,
    private authService:AuthService
  ) {}
  
  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.current_gallery = localStorage.getItem('selected_gallery')
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
  }

  ngAfterContentInit() {
    // this.initGallery()
  }

  workWithImages(id) {
    if(this.delPhoto) {
      this.deleteImages(id)
    }else if(this.replacePhoto){
      this.replaceImages(id)
    }
  }

  initGallery() { 
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed')
      var instances = M.Materialbox.init(elems, {})
    });
  }

  destroyGallery() {
  }

  addLikes(id) {
    if(!this.usersService.logged_likes[this.current_gallery].includes(id)) {
      if(this.authService.getUserLoggedIn()){
        this.usersService.logged_likes[this.current_gallery].push(id)
        this.images[this.current_gallery].likes[id]++
      }
    }
  }

  replaceImages(id) {
    this.replace_list.push(id)

      if(this.replace_list.length > 1) {
        let temp_images = this.images[this.current_gallery].img
        let temp_likes = this.images[this.current_gallery].likes

        let temp_img = temp_images[this.replace_list[0]]
        temp_images[this.replace_list[0]] = temp_images[this.replace_list[1]]
        temp_images[this.replace_list[1]] = temp_img

        let temp_like = temp_likes[this.replace_list[0]]
        temp_likes[this.replace_list[0]] = temp_likes[this.replace_list[1]]
        temp_likes[this.replace_list[1]] = temp_like
        
        this.replace_list = []
      }
  }

  deleteImages(id) {
    this.images[this.current_gallery].img.splice(id, 1)
    this.images[this.current_gallery].likes.splice(id, 1)
  }

  onDeletePhoto(c) {
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

  checkUserGallery() {
    if(this.authService.getUserLoggedIn()){
      if(this.current_gallery == this.authService.getLoggedUserId()) {
        return true
      }
      return false
    }
  }
}
