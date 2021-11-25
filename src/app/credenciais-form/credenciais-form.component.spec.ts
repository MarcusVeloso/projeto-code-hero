import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredenciaisFormComponent } from './credenciais-form.component';

describe('CredenciaisFormComponent', () => {
  let component: CredenciaisFormComponent;
  let fixture: ComponentFixture<CredenciaisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredenciaisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredenciaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
