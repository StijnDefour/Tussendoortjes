import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoelenComponent } from './list-doelen.component';

describe('ListDoelenComponent', () => {
  let component: ListDoelenComponent;
  let fixture: ComponentFixture<ListDoelenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDoelenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
