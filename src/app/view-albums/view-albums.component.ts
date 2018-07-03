import { Component, OnInit, AfterViewInit } from '@angular/core'
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-view-albums',
  templateUrl: './view-albums.component.html',
  styleUrls: ['./view-albums.component.css']
})
export class ViewAlbumsComponent implements OnInit, AfterViewInit {

  users = []
  images = []
  private current_gallery
  current_albums = []
  albums_names = []
  albums_images = []
  albums_descriptions = []
  flag = false
  unflag =false
  style_p = ""

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.current_gallery = localStorage.getItem('selected_profile')
    this.setCurrentAlbums()
    this.setCurrentAlbumsNames()
    // this.replaceFlaggedNames()
    this.replaceFlaggedAlbums()
  }

  setCurrentAlbums() {
    this.current_albums = Object.values(this.images[this.current_gallery].albums)
  }

  setCurrentAlbumsNames() {
    const albums = this.images[this.current_gallery].albums
    const names = Object.keys(albums)
    this.albums_names.push(names)
  }

  onClickFlag() {
    this.flag = true
  }

  onClickUnFlag() {
    this.unflag = true
  }

  onSaveFlag() {
    this.flag = false
    this.unflag = false
    this.replaceFlaggedAfterSave()
  }

  onClickAlbum(id) {
    if(this.flag) {
      this.makeFlagged(id)
    }else if(this.unflag) {
      this.makeUnFlagged(id)
    }
    else{
      //open album
      console.log(id)
      this.showSelectedAlbum()
    }
  }

  makeFlagged(id) {
    for (let i = 0; i < this.current_albums.length; i++) {
      if(i == id) {
        this.current_albums[i].flag = true
      }
    }
  }

  makeUnFlagged(id) {
    for (let i = 0; i < this.current_albums.length; i++) {
      if(i == id) {
        this.current_albums[i].flag = false
      }
    }
  }

  showSelectedAlbum() {

  }

  replaceFlaggedAlbums() {
    const array_primary_albums = []
    const array_secondary_albums = []
    const array_primary_names = []
    const array_secondary_names = []

    for (let i = 0; i < this.current_albums.length; i++) {
      if(this.current_albums[i].flag) {
        array_primary_albums.push(this.current_albums[i])
        array_primary_names.push(this.albums_names[0][i])
      }else {
        array_secondary_albums.push(this.current_albums[i])
        array_secondary_names.push(this.albums_names[0][i])
      }
    }
    this.current_albums = (array_primary_albums.concat(array_secondary_albums))
    this.albums_names = (array_primary_names.concat(array_secondary_names))
  }

  replaceFlaggedAfterSave() {
    console.log(this.current_albums)
    const array_primary_albums = []
    const array_secondary_albums = []
    const array_primary_names = []
    const array_secondary_names = []

    for (let i = 0; i < this.current_albums.length; i++) {
      if(this.current_albums[i].flag) {
        array_primary_albums.push(this.current_albums[i])
        array_primary_names.push(this.albums_names[i])
        console.log("true - " + i + " " +this.current_albums[i])
      }else {
        array_secondary_albums.push(this.current_albums[i])
        array_secondary_names.push(this.albums_names[i])
        console.log("false - " + i + " " +this.current_albums[i])
      }
    }
    this.current_albums = (array_primary_albums.concat(array_secondary_albums))
    this.albums_names = (array_primary_names.concat(array_secondary_names))
  }
  
  setPrimaryStyle(id) {

  }

}
