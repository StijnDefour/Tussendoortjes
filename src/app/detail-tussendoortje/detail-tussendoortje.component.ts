import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

declare var tinymce: any;

@Component({
  selector: 'app-detail-tussendoortje',
  templateUrl: './detail-tussendoortje.component.html',
  styleUrls: ['./detail-tussendoortje.component.css']
})

export class DetailTussendoortjeComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private _cookieService: CookieService) { }
  vaardigheid: string;
  doel: string;
  private sub: any;
  imageUrls: string[] = [];
  leerdoelen: string[] = [''];

  @ViewChild('myFotos') myFotos: ElementRef;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.vaardigheid = params['vaardigheid'];
      this.doel = params['doel'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getTinyMceContent() {
      console.log(tinymce.get('editor').getContent());
  }

  getDoelen(): any {
      const doelCookie = this._cookieService.get('doelenGeselecteerd');
      return doelCookie.split(',');
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      if (files) {
        for (const file of files) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.imageUrls.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    }
    this.reset();
  }

  reset(): void {
    this.myFotos.nativeElement.value = '';
  }

  deleteImage(index: number) {
    this.reset();
    this.imageUrls.splice(index, 1);
  }
}
