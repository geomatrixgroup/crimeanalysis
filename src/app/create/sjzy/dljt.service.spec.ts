import { TestBed, inject } from '@angular/core/testing';

import { DljtService } from './dljt.service';

describe('DljtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DljtService]
    });
  });

  it('should be created', inject([DljtService], (service: DljtService) => {
    expect(service).toBeTruthy();
  }));
});
