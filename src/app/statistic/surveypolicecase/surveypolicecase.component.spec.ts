import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveypolicecaseComponent } from './surveypolicecase.component';

describe('SurveypolicecaseComponent', () => {
  let component: SurveypolicecaseComponent;
  let fixture: ComponentFixture<SurveypolicecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveypolicecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveypolicecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
