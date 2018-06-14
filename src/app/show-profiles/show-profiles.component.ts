import { Component, Input, OnInit } from '@angular/core'
import { UsersService } from '../users.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-show-profiles',
  templateUrl: './show-profiles.component.html',
  styleUrls: ['./show-profiles.component.css']
})
export class ShowProfilesComponent implements OnInit{

  constructor(private usersService:UsersService, private authService:AuthService) {

  }

  @Input() user

  showProfile() {
    this.usersService.setCurrentUser(this.user)
    
  }

  ngOnInit() {
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
    localStorage.removeItem('selected_gallery')
  }
}
