import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionpolicecaseComponent } from './attentionpolicecase.component';

describe('AttentionpolicecaseComponent', () => {
  let component: AttentionpolicecaseComponent;
  let fixture: ComponentFixture<AttentionpolicecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionpolicecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionpolicecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
