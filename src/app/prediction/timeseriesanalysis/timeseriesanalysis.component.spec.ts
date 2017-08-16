import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeseriesanalysisComponent } from './timeseriesanalysis.component';

describe('TimeseriesanalysisComponent', () => {
  let component: TimeseriesanalysisComponent;
  let fixture: ComponentFixture<TimeseriesanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeseriesanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeseriesanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
