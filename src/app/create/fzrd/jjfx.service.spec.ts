import { TestBed, inject } from '@angular/core/testing';

import { JjfxService } from './jjfx.service';

describe('JjfxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JjfxService]
    });
  });

  it('should be created', inject([JjfxService], (service: JjfxService) => {
    expect(service).toBeTruthy();
  }));
});
