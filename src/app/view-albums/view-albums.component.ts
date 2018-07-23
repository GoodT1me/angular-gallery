import { Component, OnInit,  AfterViewInit } from '@angular/core'
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'
import * as M from "materialize-css"
import { element } from 'protractor';

@Component({
  selector: 'app-view-albums',
  templateUrl: './view-albums.component.html',
  styleUrls: ['./view-albums.component.css']
})
export class ViewAlbumsComponent implements OnInit, AfterViewInit {

  users = []
  images = []
  current_albums
  id_album_edit
  flag = false
  unflag = false
  delete_album = false
  edit_album = false
  click_album = false
  edit_selected_album = false
  private selected_profile
  selected_album
  form_add_albums: FormGroup
  form_edit_albums: FormGroup
  count_insert = [1]

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.initAddAlbumsModal()
    this.initEditAlbum()
  }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.selected_album = localStorage.getItem('album_id')
    this.selected_profile = localStorage.getItem('selected_profile')
    this.replaceFlaggedAlbums()
    this.initFormAddAlbum()
    this.initFormEditAlbum()
    // localStorage.removeItem('album_id')
  }

  onClickFlag() {
    this.flag = true
  }

  onClickUnFlag() {
    this.unflag = true
  }

  onClickDeleteAlbum() {
    this.delete_album = true
  }

  onClickEditAlbum() {
    this.edit_album = true
  }

  onSaveFlag() {
    this.flag = false
    this.unflag = false
    this.delete_album = false
    this.edit_album = false
    this.edit_selected_album = false
    this.replaceFlaggedAlbums()
  }

  onClickEditSelectedAlbum() {
    this.form_edit_albums = this.formBuilder.group({
      album_name: this.images[this.selected_profile].albums[this.id_album_edit].name,
      album_description: this.images[this.selected_profile].albums[this.id_album_edit].description,
      checkFlag: this.images[this.selected_profile].albums[this.id_album_edit].flag
    })
  }

  initAddAlbumsModal() {
    let elems = document.querySelectorAll('.modal-add-albums')
    M.Modal.init(elems, {})
  }

  initEditAlbum() {
    let elems = document.querySelectorAll('.modal-edit-albums')
    M.Modal.init(elems, {})
  }

  initFormAddAlbum() {
    this.form_add_albums = this.formBuilder.group({
      album_name: '',
      album_description: 'default',
      checkFlag: false
    })
  }

  initFormEditAlbum() {
    this.form_edit_albums = this.formBuilder.group({
      album_name: '',
      album_description: '',
      checkFlag: false
    })
  }

  addAlbum() {
    let id = this.getMaxAlbumId()
    id++
    this.images[this.selected_profile].albums.push({
      id_album: id,
      name: this.form_add_albums.value.album_name,
      img: [],
      description: this.form_add_albums.value.album_description,
      likes: [],
      flag: this.form_add_albums.value.checkFlag
    })
    this.usersService.logged_likes[this.selected_profile].push([])
    this.initFormAddAlbum()
  }

  editAlbum() {
    this.images[this.selected_profile].albums[this.id_album_edit].name = this.form_edit_albums.value.album_name
    this.images[this.selected_profile].albums[this.id_album_edit].description = this.form_edit_albums.value.album_description
    this.images[this.selected_profile].albums[this.id_album_edit].flag = this.form_edit_albums.value.checkFlag
    this.initFormAddAlbum()
    this.edit_selected_album = false
  }

  onClickAlbum(id) {
    this.click_album = true
    if(this.flag) {
      this.makeFlagged(id)
    }else if(this.unflag) {
      this.makeUnFlagged(id)
    }else if(this.delete_album) {
      this.deleteAlbums(id)
    }else if (this.edit_album) {
      this.id_album_edit = id
      this.edit_selected_album = true
    }else {
      // open clicked album
      if(!(this.flag || this.unflag || this.delete_album || this.edit_album)) {
        this.authService.setSelectedAlbum(id)
        this.router.navigate(['albums/photo'])
      }
    }
  }

  makeFlagged(id) {
    const albums = this.images[this.selected_profile].albums
    for (let i = 0; i < albums.length; i++) {
      if(i == id) {
        albums[i].flag = true
      }
    }
  }

  makeUnFlagged(id) {
    const albums = this.images[this.selected_profile].albums
    for (let i = 0; i < albums.length; i++) {
      if(i == id) {
        albums[i].flag = false
      }
    }
  }

  deleteAlbums(id) {
    this.images[this.selected_profile].albums.splice(id, 1)
  }

  replaceFlaggedAlbums() {
    let flagged_albums = []
    let unflagged_albums = []
    const albums = this.images[this.selected_profile].albums

    for (let i = 0; i < albums.length; i++) {
      if(albums[i].flag) {
        flagged_albums.push(albums[i])
      }else {
        unflagged_albums.push(albums[i])
      }
    }
    //sort flagged & unflagged albums
    for (let i = 0; i < flagged_albums.length - 1; i++) {
      for (let j = 0; j < flagged_albums.length - i - 1; j++) {
        if(flagged_albums[j].id_album > flagged_albums[j+1].id_album) {
          const temp = flagged_albums[j]
          flagged_albums[j] = flagged_albums[j+1]
          flagged_albums[j+1] = temp
        }
      }
    }

    for (let i = 0; i < unflagged_albums.length - 1; i++) {
      for (let j = 0; j < unflagged_albums.length - i - 1; j++) {
        if(unflagged_albums[j].id_album > unflagged_albums[j+1].id_album) {
          const temp = unflagged_albums[j]
          unflagged_albums[j] = unflagged_albums[j+1]
          unflagged_albums[j+1] = temp
        }
      }
    }

    this.images[this.selected_profile].albums = (flagged_albums.concat(unflagged_albums))
  }

  getMaxAlbumId() {
    const albums = this.images[this.selected_profile].albums
    let max = 0
    for(let i = 0; i < albums.length; i++) {
      if(albums[i].id_album > max) {
        max = albums[i].id_album
      }
    }
    return max
  }
  
  compareLoggedProfileWithSelected() {
    if(this.authService.getUserLoggedIn()) {
      if(this.authService.getLoggedUserId() == this.selected_profile){
        return true
      }
    }
    return false
  }

}
