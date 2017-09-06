import { TestBed, inject } from '@angular/core/testing';

import { JqgkService } from './jqgk.service';

describe('JqgkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JqgkService]
    });
  });

  it('should be created', inject([JqgkService], (service: JqgkService) => {
    expect(service).toBeTruthy();
  }));
});
