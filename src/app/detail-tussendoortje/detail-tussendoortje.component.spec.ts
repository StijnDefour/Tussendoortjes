import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTussendoortjeComponent } from './detail-tussendoortje.component';

describe('DetailTussendoortjeComponent', () => {
  let component: DetailTussendoortjeComponent;
  let fixture: ComponentFixture<DetailTussendoortjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTussendoortjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTussendoortjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
