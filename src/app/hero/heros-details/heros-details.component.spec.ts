import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosDetailsComponent } from './heros-details.component';

describe('HerosDetailsComponent', () => {
  let component: HerosDetailsComponent;
  let fixture: ComponentFixture<HerosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
