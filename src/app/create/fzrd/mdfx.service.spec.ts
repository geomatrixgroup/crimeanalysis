import { TestBed, inject } from '@angular/core/testing';

import { MdfxService } from './mdfx.service';

describe('MdfxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdfxService]
    });
  });

  it('should be created', inject([MdfxService], (service: MdfxService) => {
    expect(service).toBeTruthy();
  }));
});
