import { Component, Input } from '@angular/core';
import { USERS } from '../User'

@Component({
  selector: 'app-show-profiles',
  templateUrl: './show-profiles.component.html',
  styleUrls: ['./show-profiles.component.css']
})
export class ShowProfilesComponent {

  @Input() user

  users = USERS

  showProfile() {
    console.log(this.users)
  }
  
}
