import { TestBed, inject } from '@angular/core/testing';

import { TsfxService } from './tsfx.service';

describe('TsfxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsfxService]
    });
  });

  it('should be created', inject([TsfxService], (service: TsfxService) => {
    expect(service).toBeTruthy();
  }));
});
