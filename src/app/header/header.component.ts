import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service'
import * as M from "materialize-css"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  logged = false
  
  constructor(public authService:AuthService) {
  }

  ngOnInit() {
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
    this.logged = this.authService.getUserLoggedIn()
  }

  ngAfterViewInit() {
    this.initModal()
  }

  initModal() {
    let elems = document.querySelectorAll('.modal')
    M.Modal.init(elems, {})
  }

  checkIfSelectProfile() {
    if(localStorage.getItem('selected_profile')) {
      return true
    }
    return false
  }
}