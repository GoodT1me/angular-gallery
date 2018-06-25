import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ShowProfilesComponent } from './show-profiles/show-profiles.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ViewProfileComponent } from './view-profile/view-profile.component'
import { SearchPipe } from './search.pipe'
import { RouterModule } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggedProfileComponent } from './logged-profile/logged-profile.component'
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard'

const ROUTES= [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'profile',
    component: ViewProfileComponent
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
  },
  {
    path: 'profile/upload',
    component: UploadImgComponent
  },
  {
    path: 'profile',
    component:LoggedProfileComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowProfilesComponent,
    ViewProfileComponent,
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
