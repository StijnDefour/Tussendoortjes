import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ListTussendoortjesComponent } from './list-tussendoortjes/list-tussendoortjes.component';
import { HomeComponent } from './home/home.component';
import { DetailTussendoortjeComponent } from './detail-tussendoortje/detail-tussendoortje.component';

import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AppComponent,
    ListTussendoortjesComponent,
    HomeComponent,
    DetailTussendoortjeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EditorModule,
    RouterModule.forRoot([
      {
        path: 'list/:vaardigheid/:doel',
        component: DetailTussendoortjeComponent
      },
      {
        path: 'list/:vaardigheid',
        component: ListTussendoortjesComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
