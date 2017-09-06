import { TestBed, inject } from '@angular/core/testing';

import { ZttcService } from './zttc.service';

describe('ZttcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZttcService]
    });
  });

  it('should be created', inject([ZttcService], (service: ZttcService) => {
    expect(service).toBeTruthy();
  }));
});
