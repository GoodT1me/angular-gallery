import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  cont_user = 0
  cont_img = 0
  currentUser
  constructor() {
    this.completeLikes()
  }

  ngOnInit() {
    
  }

  setCurrentUser(user) {
    this.currentUser = user
  }

  getCurrentUser() {
    return this.currentUser
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  completeLikes() {
    for(this.cont_user; this.cont_user < this.USERS.length; this.cont_user++) {
      for(this.cont_img; this.cont_img < this.USERS[this.cont_user].dbImg.length;this.cont_img++) {
        this.USERS[this.cont_user].likes.push(this.getRandomInt(100))
      }
    }
  }

  USERS = [
    {
      idUser: 1,
      userName: 'User 1',
      password: 'pass1',
      lastName: 'LN 1',
      firstName: 'FN 1',
      avatar : 'img-url',
      dbImg: [
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png',
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png',
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png'
      ],
      likes: []
    },
    {
      idUser: 2,
      userName: 'User 2',
      password: 'pass2',
      lastName: 'LN 2',
      firstName: 'FN 2',
      avatar : 'img-url',
      dbImg: [
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png',
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png'
      ],
      likes: []
    },
    {
      idUser: 3,
      userName: 'User 3',
      password: 'pass3',
      lastName: 'LN 3',
      firstName: 'FN 3',
      avatar : 'img-url',
      dbImg: [
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png',
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png',
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png',
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png'
      ],
      likes: []
    }
  ]
}

