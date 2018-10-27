import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HLandingComponent } from './h-landing.component';

describe('HLandingComponent', () => {
  let component: HLandingComponent;
  let fixture: ComponentFixture<HLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
