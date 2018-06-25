import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users = []
  searchUser = ''

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.users = this.usersService.USERS
  }

}
