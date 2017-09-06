import { TestBed, inject } from '@angular/core/testing';

import { PrototypeService } from './prototype.service';

describe('PrototypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrototypeService]
    });
  });

  it('should be created', inject([PrototypeService], (service: PrototypeService) => {
    expect(service).toBeTruthy();
  }));
});
