import { TestBed, inject } from '@angular/core/testing';

import { SxfxService } from './sxfx.service';

describe('SxfxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SxfxService]
    });
  });

  it('should be created', inject([SxfxService], (service: SxfxService) => {
    expect(service).toBeTruthy();
  }));
});
