import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { AuthFormComponent } from './auth-form/auth-form.component'
import { ShowProfilesComponent } from './show-profiles/show-profiles.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ViewProfileLoggedComponent } from './view-profile-logged/view-profile-logged.component'
import { ViewProfileAnotherComponent } from './view-profile-another/view-profile-another.component'
import { FormsModule } from '@angular/forms'
import { SearchPipe } from './search.pipe'
import { RouterModule } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component';
import { UploadImgComponent } from './upload-img/upload-img.component';

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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthFormComponent,
    ShowProfilesComponent,
    ViewProfileLoggedComponent,
    ViewProfileAnotherComponent,
    SearchPipe,
    HomePageComponent,
    UploadImgComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
