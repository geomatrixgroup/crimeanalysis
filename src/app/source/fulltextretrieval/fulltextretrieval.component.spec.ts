import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltextretrievalComponent } from './fulltextretrieval.component';

describe('FulltextretrievalComponent', () => {
  let component: FulltextretrievalComponent;
  let fixture: ComponentFixture<FulltextretrievalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulltextretrievalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltextretrievalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
