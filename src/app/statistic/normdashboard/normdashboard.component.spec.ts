import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormdashboardComponent } from './normdashboard.component';

describe('NormdashboardComponent', () => {
  let component: NormdashboardComponent;
  let fixture: ComponentFixture<NormdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
