import { TestBed, inject } from '@angular/core/testing';

import { JqsjService } from './jqsj.service';

describe('JqsjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JqsjService]
    });
  });

  it('should be created', inject([JqsjService], (service: JqsjService) => {
    expect(service).toBeTruthy();
  }));
});
