import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-tussendoortje',
  templateUrl: './detail-tussendoortje.component.html',
  styleUrls: ['./detail-tussendoortje.component.css']
})

export class DetailTussendoortjeComponent implements OnInit {
  vaardigheid: string;
  doel: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.vaardigheid = params['vaardigheid'];
      this.doel = params['doel'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getTinyMceContent() {
    console.log(tinymce.get("editor").getContent());
  }
}
