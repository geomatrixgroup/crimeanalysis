import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationanalysisComponent } from './situationanalysis.component';

describe('SituationanalysisComponent', () => {
  let component: SituationanalysisComponent;
  let fixture: ComponentFixture<SituationanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
