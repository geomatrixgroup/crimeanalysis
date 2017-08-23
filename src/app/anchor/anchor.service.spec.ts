import { TestBed, inject } from '@angular/core/testing';

import { AnchorService } from './anchor.service';

describe('CloseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnchorService]
    });
  });

  it('should be created', inject([AnchorService], (service: AnchorService) => {
    expect(service).toBeTruthy();
  }));
});
