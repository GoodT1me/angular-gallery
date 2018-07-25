import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'
import * as M from "materialize-css"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-view-profile-another',
  templateUrl: './view-profile-another.component.html',
  styleUrls: ['./view-profile-another.component.css']
})
export class ViewProfileAnotherComponent implements OnInit, AfterViewInit {
  
  users = []
  images = []
  private selected_profile
  selected_album
  clicked_like = []
  delPhoto = false
  replacePhoto = false
  add_image = false
  replace_list = []
  isRed = true

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
    this.selected_album = localStorage.getItem('album_id')
    this.selected_profile = localStorage.getItem('selected_profile')
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
  }

  ngAfterViewInit() {
    this.initGallery()
  }

  workWithImages(id) {
    if(this.delPhoto) {
      this.deleteImages(id)
    }else if(this.replacePhoto){
      this.replaceImages(id)
    }
  }

  initGallery() {
    let elems = document.querySelectorAll('.materialboxed')
    M.Materialbox.init(elems, {});
  }

  addLikes(id) {
    if(this.authService.getUserLoggedIn()) {
      if(!this.usersService.logged_likes[this.selected_profile][this.selected_album].includes(id)) {
        this.usersService.logged_likes[this.selected_profile][this.selected_album].push(id)
        this.images[this.selected_profile].albums[this.selected_album].likes[id]++
      }
    }
  }

  replaceImages(id) {
    this.replace_list.push(id)

      if(this.replace_list.length > 1) {
        let temp_images = this.images[this.selected_profile].albums[this.selected_album].img
        let temp_likes = this.images[this.selected_profile].albums[this.selected_album].likes

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
    this.images[this.selected_profile].albums[this.selected_album].img.splice(id, 1)
    this.images[this.selected_profile].albums[this.selected_album].likes.splice(id, 1)
  }

  onDeletePhoto(c) {
    this.add_image = true
    this.delPhoto = true
    this.instruction.delete_instruction = true
  }

  onSaveDeleted() {
    this.delPhoto = false
    this.instruction.delete_instruction = false
    this.add_image = false
  }

  onReplacePhoto() {
    this.add_image = true
    this.replacePhoto = true
    this.instruction.replace_instruction = true
  }

  onSaveReplaced() {
    this.replacePhoto = false
    this.instruction.replace_instruction = false
    this.replace_list = [] 
    this.add_image = false
  }

  checkUserGallery() {
    if(this.authService.getUserLoggedIn()){
      if(this.selected_profile == this.authService.getLoggedUserId()) {
        return true
      }
      return false
    }
  }
}
