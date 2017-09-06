import { TestBed, inject } from '@angular/core/testing';

import { DldtService } from './dldt.service';

describe('DldtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DldtService]
    });
  });

  it('should be created', inject([DldtService], (service: DldtService) => {
    expect(service).toBeTruthy();
  }));
});
