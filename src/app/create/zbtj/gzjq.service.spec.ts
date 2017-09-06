import { TestBed, inject } from '@angular/core/testing';

import { GzjqService } from './gzjq.service';

describe('GzjqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GzjqService]
    });
  });

  it('should be created', inject([GzjqService], (service: GzjqService) => {
    expect(service).toBeTruthy();
  }));
});
