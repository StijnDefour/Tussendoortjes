import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTussendoortjesComponent } from './list-tussendoortjes.component';

describe('ListTussendoortjesComponent', () => {
  let component: ListTussendoortjesComponent;
  let fixture: ComponentFixture<ListTussendoortjesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTussendoortjesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTussendoortjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
