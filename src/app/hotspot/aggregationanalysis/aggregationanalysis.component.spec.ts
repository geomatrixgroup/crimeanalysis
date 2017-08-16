import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregationanalysisComponent } from './aggregationanalysis.component';

describe('AggregationanalysisComponent', () => {
  let component: AggregationanalysisComponent;
  let fixture: ComponentFixture<AggregationanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregationanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregationanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
