import { TestBed } from '@angular/core/testing';

import { BigOService } from './big-o.service';

describe('BigOService', () => {
  let service: BigOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
