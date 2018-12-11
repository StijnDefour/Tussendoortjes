import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListTussendoortjesComponent } from './list-tussendoortjes/list-tussendoortjes.component';
import { HomeComponent } from './home/home.component';
import { DetailTussendoortjeComponent } from './detail-tussendoortje/detail-tussendoortje.component';

import { EditorModule } from '@tinymce/tinymce-angular';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CookieLawModule } from 'angular2-cookie-law';
import { ListDoelenComponent } from './list-doelen/list-doelen.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTussendoortjesComponent,
    HomeComponent,
    DetailTussendoortjeComponent,
    ListDoelenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EditorModule,
    BrowserAnimationsModule,
    CookieLawModule,
    RouterModule.forRoot([
      {
        path: 'detail/:thema/:vaardigheid/:doel',
        component: DetailTussendoortjeComponent
      },
      {
        path: 'list/:thema/:vaardigheid',
        component: ListTussendoortjesComponent
      },
      {
        path: 'selected',
        component: ListDoelenComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
