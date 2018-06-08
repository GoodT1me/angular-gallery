import { Component } from '@angular/core';
import { USERS } from '../User'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  users = USERS
  searchUser = ''
}
