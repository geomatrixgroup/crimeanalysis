import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicmapComponent } from './thematicmap.component';

describe('ThematicmapComponent', () => {
  let component: ThematicmapComponent;
  let fixture: ComponentFixture<ThematicmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThematicmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThematicmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
