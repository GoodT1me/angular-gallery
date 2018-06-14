import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ShowProfilesComponent } from './show-profiles/show-profiles.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ViewProfileLoggedComponent } from './view-profile-logged/view-profile-logged.component'
import { ViewProfileAnotherComponent } from './view-profile-another/view-profile-another.component'
import { SearchPipe } from './search.pipe'
import { RouterModule } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggedProfileComponent } from './logged-profile/logged-profile.component'
import { HttpClientModule } from '@angular/common/http'

const ROUTES= [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'profile-another',
    component: ViewProfileAnotherComponent
  },
  {
    path: 'profile-logged',
    component: ViewProfileLoggedComponent
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    // children: [
    //   {
    //     path: 'upload',
    //     component: UploadImgComponent
    //   }
    // ]
  },
  {
    path: 'profile-another/upload',
    component: UploadImgComponent
  },
  {
    path: 'profile',
    component:LoggedProfileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowProfilesComponent,
    ViewProfileLoggedComponent,
    ViewProfileAnotherComponent,
    SearchPipe,
    HomePageComponent,
    UploadImgComponent,
    LoginFormComponent,
    LoggedProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
