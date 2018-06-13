import { Component, Input, OnInit } from '@angular/core'
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
