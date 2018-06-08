import { Component } from '@angular/core';
import { USERS } from '../User'

@Component({
  selector: 'app-view-profile-another',
  templateUrl: './view-profile-another.component.html',
  styleUrls: ['./view-profile-another.component.css']
})
export class ViewProfileAnotherComponent {
  
  users = USERS

}
