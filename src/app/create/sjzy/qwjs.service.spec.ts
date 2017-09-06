import { TestBed, inject } from '@angular/core/testing';

import { QwjsService } from './qwjs.service';

describe('QwjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QwjsService]
    });
  });

  it('should be created', inject([QwjsService], (service: QwjsService) => {
    expect(service).toBeTruthy();
  }));
});
