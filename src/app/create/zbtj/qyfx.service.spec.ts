import { TestBed, inject } from '@angular/core/testing';

import { QyfxService } from './qyfx.service';

describe('QyfxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QyfxService]
    });
  });

  it('should be created', inject([QyfxService], (service: QyfxService) => {
    expect(service).toBeTruthy();
  }));
});
