import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersService } from '../users.service'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})

export class UploadImgComponent implements OnInit {

  private selected_profile
  selected_album
  form: FormGroup;
  chose_images = []
  add_likes = []
  del_image = false
  users = []
  images = []

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.users = this.usersService.USERS
    this.images = this.usersService.IMAGES
    this.selected_profile = localStorage.getItem('selected_profile')
    this.selected_album = localStorage.getItem('album_id')
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader()
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0]
      reader.readAsDataURL(file)
      reader.onload = (result) => {
        this.chose_images.push(reader.result)
        this.add_likes.push(0)
        this.form.get('image').setValue({
          filename: file.name,
          filetype: file.type,
          value: result
          // value2: reader.result.split(',')[1]
        })
      }
    }
  }

  onSubmit() {
    const formModel = this.form.get('image')
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {

      this.images[this.selected_profile].albums[this.selected_album].img.push.apply(this.images[this.selected_profile].albums[this.selected_album].img, this.chose_images)
      this.images[this.selected_profile].albums[this.selected_album].likes.push.apply(this.images[this.selected_profile].albums[this.selected_album].likes, this.add_likes)

      if(this.chose_images.length > 0) {
        alert("upload successful")
      } else {
        alert("please select image for upload")
      }
      this.chose_images = []
      this.add_likes = []
    }, 1000)
  }

  onDeletePhoto() {
    if(this.chose_images.length > 0) {
      this.del_image = true
    }
  }

  deletePhoto(id) {
    if(this.del_image) {
      this.chose_images.splice(id, 1)
    }
  }

  onSaveDeleted() {
    this.del_image = false
  }
}