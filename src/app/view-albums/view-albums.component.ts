import { Component, OnInit } from '@angular/core'
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-view-albums',
  templateUrl: './view-albums.component.html',
  styleUrls: ['./view-albums.component.css']
})
export class ViewAlbumsComponent implements OnInit {

  users = []
  images = []
  private current_gallery
  current_albums = []
  albums_names = []
  albums_images = []
  albums_descriptions = []

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.current_gallery = localStorage.getItem('selected_gallery')
    this.setCurrentAlbums()
    this.setCurrentAlbumsNames()
    this.setCurrentAlbumsElems()
  }

  setCurrentAlbums() {
    this.current_albums = this.images[this.current_gallery].albums
  }

  setCurrentAlbumsNames() {
    const albums = this.current_albums
    const names = Object.keys(albums)
    this.albums_names.push(names)
  }

  setCurrentAlbumsElems(){
    const albums = this.current_albums
    const names = Object.keys(albums)

    names.forEach((name) => {
      const album = albums[name]
      this.albums_images.push(album.img)
      this.albums_descriptions.push(album.description)
    })
  }

}
