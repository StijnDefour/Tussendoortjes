import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavigatieModel } from '../Models/NavigatieModel';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-list-tussendoortjes',
  templateUrl: './list-tussendoortjes.component.html',
  styleUrls: ['./list-tussendoortjes.component.css'],
})

export class ListTussendoortjesComponent implements OnInit {
  thema: string;
  vaardigheid: string;
  private sub: any;
  navigatieModel = new NavigatieModel();

  constructor(private route: ActivatedRoute, private _cookieService: CookieService) { }

  getDoelen(): any {
    return this.navigatieModel.doelen.filter((doel) => doel.item_titel.toString() === this.thema + this.vaardigheid);
  }
  getThema(): any {
    return this.navigatieModel.themas.filter((doel) => doel.id.toString() === this.thema)[0];
  }
  getVaardigheid(): any {
    return this.navigatieModel.vaardigheden.filter((doel) => doel.id.toString() === this.vaardigheid)[0];
  }

  selecteerDoel(doel: string) {
    const doelCookie = this._cookieService.get('doelenGeselecteerd');
    if (doelCookie === undefined) {
      this._cookieService.put('doelenGeselecteerd', doel);
    } else {
      let doelen = doelCookie.split(',');
      const doelIndex = doelen.indexOf(doel);
      if (doelIndex === -1) {
        doelen.push(doel);
        this._cookieService.put('doelenGeselecteerd', doelen.join(','));
      } else {
        // tslint:disable-next-line:no-shadowed-variable
        doelen = doelen.filter(doel => doelen.indexOf(doel) !== doelIndex);
        this._cookieService.put('doelenGeselecteerd', doelen.join(','));
      }
    }
  }
  doelIsGeselecteerd(doel: string): boolean {
    const doelCookie = this._cookieService.get('doelenGeselecteerd');
    if (doelCookie === undefined) {
      return false;
    }
    const doelen = doelCookie.split(',');
    const doelIndex = doelen.indexOf(doel);
    if (doelIndex === -1) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.vaardigheid = params['vaardigheid'];
       this.thema = params['thema'];
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
