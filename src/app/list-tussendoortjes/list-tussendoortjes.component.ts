import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tussendoortjes',
  templateUrl: './list-tussendoortjes.component.html',
  styleUrls: ['./list-tussendoortjes.component.css'],
})

export class ListTussendoortjesComponent implements OnInit {
  vaardigheid: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.vaardigheid = params['vaardigheid'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
