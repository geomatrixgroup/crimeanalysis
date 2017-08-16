import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DensityanalysisComponent } from './densityanalysis.component';

describe('DensityanalysisComponent', () => {
  let component: DensityanalysisComponent;
  let fixture: ComponentFixture<DensityanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DensityanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DensityanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
