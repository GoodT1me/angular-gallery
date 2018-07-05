import { Component, OnInit,  AfterViewInit} from '@angular/core'
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
  private current_profile
  flag = false
  unflag = false
  delete_album = false
  form_add_albums: FormGroup
  count_insert = [1]

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.initAddAlbumsModal()
  }

  ngOnInit() {
    this.current_profile = localStorage.getItem('selected_profile')
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.replaceFlaggedAlbums()
    this.initFormAddAlbum()
    localStorage.removeItem('album_id')
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

  onSaveFlag() {
    this.flag = false
    this.unflag = false
    this.delete_album = false
    this.replaceFlaggedAlbums()
  }

  initAddAlbumsModal() {
    let elems = document.querySelectorAll('.modal-add-albums')
    M.Modal.init(elems, {})
  }

  initFormAddAlbum() {
    this.form_add_albums = this.formBuilder.group({
      album_name: '',
      album_description: 'default',
      checkFlag: false
    })
  }

  addAlbum() {
    let id = this.getMaxAlbumId()
    id++
    this.images[this.current_profile].albums.push({
      id_album: id,
      name: this.form_add_albums.value.album_name,
      img: [],
      description: this.form_add_albums.value.album_description,
      likes: [],
      flag: this.form_add_albums.value.checkFlag
    })
    this.usersService.logged_likes[this.current_profile].push([])
    this.initFormAddAlbum()
  }

  onClickAlbum(id) {
    if(this.flag) {
      this.makeFlagged(id)
    }else if(this.unflag) {
      this.makeUnFlagged(id)
    }else if(this.delete_album) {
      this.deleteAlbums(id)
    }
  }

  onClickAlbumName(id){
    if(!(this.flag || this.unflag || this.delete_album)) {
      this.authService.setSelectedAlbum(id)
      this.router.navigate(['albums/photo'])
      console.log(this.images[this.current_profile].albums)
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

  deleteAlbums(id) {
    console.log("delete album - " + id)
    this.images[this.current_profile].albums.splice(id, 1)
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

    this.images[this.current_profile].albums = (flagged_albums.concat(unflagged_albums))
  }

  getMaxAlbumId() {
    const albums = this.images[this.current_profile].albums
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
      if(this.authService.getLoggedUserId() == this.current_profile){
        return true
      }
    }
    return false
  }

}
