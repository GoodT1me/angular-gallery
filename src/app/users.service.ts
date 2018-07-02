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
    localStorage.setItem('selected_profile', user.id_user)
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  completeLikes() {
    this.IMAGES.forEach((user_albums) => {
      const albums = user_albums.albums

      const albums_names = Object.keys(albums)

      albums_names.forEach(name => {
        const album = albums[name]

        for(let count_img = 0; count_img < album.img.length; count_img++) {
          album.likes.push(this.getRandomInt(99))
        }
      })
    })
  }

  USERS = [
    {
      id_user: 0,
      userName: 'Mike',
      password: 'a',
      lastName: 'LN 1',
      firstName: 'FN 1',
    },
    {
      id_user: 1,
      userName: 'Tom',
      password: '1234',
      lastName: 'LN 2',
      firstName: 'FN 2',
    },
    {
      id_user: 2,
      userName: 'Ann',
      password: 'pass3',
      lastName: 'LN 3',
      firstName: 'FN 3',
    }
  ]

  IMAGES = [
    {
      id_user: 0,
      avatar : '../assets/local_img.png',
      albums: {
        default_album_1: {
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
          ],
          description: "Mark's album 1",
          likes: [],
          flag: false
        },
        default_album_2: {
          img: [
            '../assets/19.png',
            '../assets/20.png',
            '../assets/21.png',
            '../assets/22.png',
            '../assets/23.png',
            '../assets/24.png',
            '../assets/25.png'
          ],
          description: "Mark's album 2",
          likes: [],
          flag: true
        },
      },
    },
    {
      id_user: 1,
      avatar : '../assets/local_img.png',
      albums: {
        default_album_1: {
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
          ],
          description: "Tom's album 1",
          likes: [],
          flag: false
        },
        default_album_2: {
          img: [
            '../assets/1.png',
            '../assets/2.png',
            '../assets/3.png',
            '../assets/4.png',
            '../assets/5.png',
            '../assets/6.png',
            '../assets/12.png',
            '../assets/13.png',
            '../assets/14.png',
            '../assets/15.png',
            '../assets/16.png',
          ],
          description: "Tom's album 1",
          likes: [],
          flag: false
        },
      },
    },
    {
      id_user: 2,
      avatar : '../assets/local_img.png',
      albums: {
        default_album_1: {
          img: [
            '../assets/1.png',
            '../assets/2.png',
            '../assets/3.png',
            '../assets/4.png',
            '../assets/5.png',
            '../assets/6.png',
            '../assets/7.png',
          ],
          description: "Ann's album 1",
          likes: [],
          flag: false
        },
        default_album_2: {
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
          ],
          description: "Ann's album 2",
          likes: [],
          flag: true
        },
        default_album_3: {
          img: [
            '../assets/1.png',
            '../assets/2.png',
            '../assets/3.png',
            '../assets/4.png',
            '../assets/5.png',
            '../assets/6.png',
            '../assets/7.png',
          ],
          description: "Ann's album 3",
          likes: [],
          flag: false
        },
      },
    }
  ]
}

