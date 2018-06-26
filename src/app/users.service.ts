import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser
  logged_likes = [[], [], []]

  constructor() {
    this.completeLikes()
  }

  setCurrentUser(user) {
    localStorage.setItem('selected_gallery', user.idUser)
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
      idUser: 0,
      userName: 'a',
      password: 'a',
      lastName: 'LN 1',
      firstName: 'FN 1',
      avatar : '../assets/local_img.png',
      dbImg: [
        '../assets/1.png',
        '../assets/2.png',
        '../assets/3.png',
        '../assets/4.png',
        '../assets/5.png',
        '../assets/6.png',
        '../assets/7.png',
        '../assets/8.png',
        '../assets/9.png',
        '../assets/10.png',
        '../assets/11.png',
        '../assets/12.png',
        '../assets/13.png',
        '../assets/14.png',
        '../assets/15.png',
        '../assets/16.png'
      ],
      likes: []
    },
    {
      idUser: 1,
      userName: 'User 2',
      password: 'pass2',
      lastName: 'LN 2',
      firstName: 'FN 2',
      avatar : '../assets/local_img.png',
      dbImg: [
        '../assets/1.png',
        '../assets/2.png',
        '../assets/3.png',
        '../assets/4.png',
        '../assets/5.png',
        '../assets/6.png',
        '../assets/7.png',
        '../assets/8.png',
        '../assets/9.png',
        '../assets/10.png',
        '../assets/11.png',
        '../assets/12.png',
        '../assets/13.png',
        '../assets/14.png',
        '../assets/15.png',
        '../assets/16.png',
        '../assets/17.png',
        '../assets/18.png',
        '../assets/19.png',
        '../assets/20.png',
        '../assets/21.png',
        '../assets/22.png',
        '../assets/23.png',
        '../assets/24.png',
        '../assets/25.png'
      ],
      likes: []
    },
    {
      idUser: 2,
      userName: 'User 3',
      password: 'pass3',
      lastName: 'LN 3',
      firstName: 'FN 3',
      avatar : '../assets/local_img.png',
      dbImg: [
        '../assets/1.png',
        '../assets/2.png',
        '../assets/3.png',
        '../assets/4.png',
        '../assets/5.png',
        '../assets/6.png',
        '../assets/7.png',
        '../assets/8.png',
        '../assets/9.png'
      ],
      likes: []
    }
  ]

  IMAGES = [
    {
      id_user: 0,
      avatar : '../assets/local_img.png',
      img: [
        '../assets/1.png',
        '../assets/2.png',
        '../assets/3.png',
        '../assets/4.png',
        '../assets/5.png',
        '../assets/6.png',
        '../assets/7.png',
        '../assets/8.png',
        '../assets/9.png',
        '../assets/10.png',
        '../assets/11.png',
        '../assets/12.png',
        '../assets/13.png',
        '../assets/14.png',
        '../assets/15.png',
        '../assets/16.png'
      ]
    },
    {
      id_user: 1,
      avatar : '../assets/local_img.png',
      img: [
        '../assets/1.png',
        '../assets/2.png',
        '../assets/3.png',
        '../assets/4.png',
        '../assets/5.png',
        '../assets/6.png',
        '../assets/7.png',
        '../assets/8.png',
        '../assets/9.png',
        '../assets/10.png',
        '../assets/11.png',
        '../assets/12.png',
        '../assets/13.png',
        '../assets/14.png',
        '../assets/15.png',
        '../assets/16.png',
        '../assets/17.png',
        '../assets/18.png',
        '../assets/19.png',
        '../assets/20.png',
        '../assets/21.png',
        '../assets/22.png',
        '../assets/23.png',
        '../assets/24.png',
        '../assets/25.png'
      ]
    },
    {
      id_user: 2,
      avatar : '../assets/local_img.png',
      img: [
        '../assets/1.png',
        '../assets/2.png',
        '../assets/3.png',
        '../assets/4.png',
        '../assets/5.png',
        '../assets/6.png',
        '../assets/7.png',
        '../assets/8.png',
        '../assets/9.png'
      ]
    }
  ]
}

