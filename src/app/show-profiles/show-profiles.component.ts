import { Component, Input, OnInit, Output } from '@angular/core'
import { EventEmitter } from 'events'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-show-profiles',
  templateUrl: './show-profiles.component.html',
  styleUrls: ['./show-profiles.component.css']
})
export class ShowProfilesComponent implements OnInit{

  constructor(private usersService:UsersService) {

  }

  @Input() user

  showProfile() {
    this.usersService.setCurrentUser(this.user)
  }

  ngOnInit() {
  
  }
}
