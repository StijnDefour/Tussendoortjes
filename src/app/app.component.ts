import { Component, OnInit } from '@angular/core';

import { NavigatieModel } from './Models/NavigatieModel';

import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {
  title = 'Tussendoortjes';
  sidebarColor = 'rgb(255, 255, 255)';
  sidebarSelected = 0;
  sidebarToggle = false;
  sidebarUserToggle = false;
  userLogedIn = null;
  navigatieModel = new NavigatieModel();

  constructor(private _http: HttpClient, private _cookieService: CookieService) {}

  getVaardigheden(): any {
    return this.navigatieModel.vaardigheden.filter(item => item.item_thema === this.navigatieModel.themas[this.sidebarSelected].id);
  }

  changeSidebar(color: string, selectedIndex: number) {
    if (!this.sidebarToggle) {
      this.sidebarToggle = true;
    } else if (selectedIndex === this.sidebarSelected) {
      this.sidebarToggle = false;
    }
    this.sidebarSelected = selectedIndex;
    if (!this.sidebarToggle) {
      this.sidebarColor = 'rgb(255, 255, 255)';
    } else {this.sidebarColor = color; }
  }

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle;
    if (!this.sidebarToggle) {
      this.sidebarColor = 'rgb(255, 255, 255)';
    } else {
      this.sidebarColor = this.navigatieModel.themas[this.sidebarSelected].item_color;
    }
  }

  toggleUserSidebar() {
    this.sidebarUserToggle = !this.sidebarUserToggle;
  }

  logout() {
    this._cookieService.remove('userInfo');
    this.userLogedIn = null;
  }

  login(email: string, password: string) {
    const url = 'http://localhost:61463/api/user/getUserByLogin';

    const params = new HttpParams().set('email', email).set('password', password);

    console.log(params);

    const obs = this._http.get(url, {params});
    obs.subscribe((response) => {
        if (response != null) {
          this._cookieService.putObject('userInfo', response, {});
          this.userLogedIn = response;
        } else {
          this.userLogedIn = null;
          console.log('niks jom');
        }
      }
    );
  }

  ngOnInit() {
    // Load User info
    const userCookie = this._cookieService.get('userInfo');
    if (userCookie !== '' && this.IsJsonString(this._cookieService.get('userInfo'))) {
      this.userLogedIn = JSON.parse(this._cookieService.get('userInfo'));
    }

    // reset doelen cookie
    this._cookieService.remove('doelenGeselecteerd');
  }

  IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
}
