import { TestBed, inject } from '@angular/core/testing';

import { DbfxService } from './dbfx.service';

describe('DbfxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbfxService]
    });
  });

  it('should be created', inject([DbfxService], (service: DbfxService) => {
    expect(service).toBeTruthy();
  }));
});
