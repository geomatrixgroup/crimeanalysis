import { TestBed, inject } from '@angular/core/testing';

import { ZbybpService } from './zbybp.service';

describe('ZbybpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZbybpService]
    });
  });

  it('should be created', inject([ZbybpService], (service: ZbybpService) => {
    expect(service).toBeTruthy();
  }));
});
