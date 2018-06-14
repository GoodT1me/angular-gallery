import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser

  constructor() {
    this.completeLikes()
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
    for(let cont_user = 0; cont_user < this.USERS.length; cont_user++) {
      for(let cont_img = 0; cont_img < this.USERS[cont_user].dbImg.length; cont_img++) {
        this.USERS[cont_user].likes.push(this.getRandomInt(100))
      }
    }
  }

  USERS = [
    {
      idUser: 1,
      userName: 'a',
      password: 'a',
      lastName: 'LN 1',
      firstName: 'FN 1',
      avatar : 'data:image/jpeg;base64,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',
      dbImg: [
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png',
        'https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/desktop/assets/images/default-profile.png',
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

