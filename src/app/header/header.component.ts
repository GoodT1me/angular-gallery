import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private logged = false
  
  constructor(private authService:AuthService) {
  }

  ngOnInit() {
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
    this.logged =this.authService.getUserLoggedIn()
  }

  checkIfSelectProfile() {
    if(localStorage.getItem('selected_profile')) {
      return true
    }
    return false
  }
}