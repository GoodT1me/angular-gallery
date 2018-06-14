import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {

  selectedImage: File = null
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedImage = <File>event.target.files[0]
  }

  onUpload() {
    const fd = new FormData()
    fd.append('image', this.selectedImage, this.selectedImage.name)
    this.http.post('./', fd)
    .subscribe(res => {
      console.log(res)
    })
  }
}
