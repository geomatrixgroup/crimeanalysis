import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeanalysisComponent } from './comparativeanalysis.component';

describe('ComparativeanalysisComponent', () => {
  let component: ComparativeanalysisComponent;
  let fixture: ComponentFixture<ComparativeanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativeanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
