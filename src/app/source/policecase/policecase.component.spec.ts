import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicecaseComponent } from './policecase.component';

describe('PolicecaseComponent', () => {
  let component: PolicecaseComponent;
  let fixture: ComponentFixture<PolicecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
