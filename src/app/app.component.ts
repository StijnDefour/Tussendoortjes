import { Component } from '@angular/core';

import { SidebarItem } from './SidebarItem';
import { ThemaItem } from './ThemaItem';
import { SidebarItems } from './SidebarItems';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private http: HttpClient) {
  };

  ngOnInit() {};

  backgroundImg = "assets/Images/backgrounds/bg_1.jpeg";
  title = 'Tussendoortjes';
  sidebarColor = "rgb(255, 255, 255)";
  sidebarSelected = 0;
  sidebarToggle = false; //"page-sidebar collapse-sidebar"
  sidebarUserToggle = false; //"hide-sidebar"

  sidebarItems = new SidebarItems().items;

  changeSidebar(color: string, selectedIndex: number) {
    if (!this.sidebarToggle) {
      this.sidebarToggle=true;
    } else if (selectedIndex==this.sidebarSelected) {
      this.sidebarToggle=false;
    }
    this.sidebarSelected = selectedIndex;
    if (!this.sidebarToggle) {
      this.sidebarColor = "rgb(255, 255, 255)";
    } else {this.sidebarColor = color;}

    this.setBackgroundImage(this.sidebarItems[this.sidebarSelected].item_bg);
  };

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle;
    if (!this.sidebarToggle) {
      this.sidebarColor = "rgb(255, 255, 255)";
    } else {
      this.sidebarColor = this.sidebarItems[this.sidebarSelected].item_color;
    }
  };

  toggleUserSidebar() {
    this.sidebarUserToggle = !this.sidebarUserToggle;
  };

  setBackgroundImage(img_url: string) {
    this.backgroundImg = img_url;
  }

  login() {
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    let obs = this.http.get("http://localhost:61463/api/user/getAll/"+email);
    obs.subscribe((response) => console.log(response));
  }
}
