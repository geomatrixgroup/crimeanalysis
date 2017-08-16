import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionanalysisComponent } from './regionanalysis.component';

describe('RegionanalysisComponent', () => {
  let component: RegionanalysisComponent;
  let fixture: ComponentFixture<RegionanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
