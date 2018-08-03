import { Component, OnInit, AfterViewInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { TranslateService } from '@ngx-translate/core'
import * as M from "materialize-css"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  logged = false
  
  constructor(
    public authService:AuthService,
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang('en')
  }

  ngOnInit() {
    this.initDropDownLang()
    if(localStorage.getItem('isUserLoggedIn')) {
      this.authService.setUserLoggedIn()
    }
    this.logged = this.authService.getUserLoggedIn()
  }

  initDropDownLang() {
    let elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems, {});
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
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