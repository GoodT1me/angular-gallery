import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ShowProfilesComponent } from './show-profiles/show-profiles.component'
import { ViewProfileComponent } from './view-profile/view-profile.component'
import { SearchPipe } from './search.pipe'
import { RouterModule } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { UploadImgComponent } from './upload-img/upload-img.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { LoggedProfileComponent } from './logged-profile/logged-profile.component'
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './auth.guard'
import { ViewAlbumsComponent } from './view-albums/view-albums.component'
import { TopUsersComponent } from './top-users/top-users.component'
import { SortablejsModule } from '../../node_modules/angular-sortablejs'
// import { enableProdMode } from '@angular/core'

const ROUTES= [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'albums/photo',
    component: ViewProfileComponent
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
  },
  {
    path: 'albums/photo/upload',
    component: UploadImgComponent
  },
  {
    path: 'profile',
    component: LoggedProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'albums',
    component: ViewAlbumsComponent
  },
  {
    path: 'top-users',
    component: TopUsersComponent
  }
]

// enableProdMode()

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewProfileComponent,
    ShowProfilesComponent,
    SearchPipe,
    HomePageComponent,
    UploadImgComponent,
    LoginFormComponent,
    LoggedProfileComponent, 
    ViewAlbumsComponent,
    TopUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule,
    SortablejsModule.forRoot({ animation: 100 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
