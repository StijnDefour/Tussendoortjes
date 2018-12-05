import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tussendoortjes',
  templateUrl: './list-tussendoortjes.component.html',
  styleUrls: ['./list-tussendoortjes.component.css'],

})
export class ListTussendoortjesComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
