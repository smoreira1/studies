import { TestBed } from '@angular/core/testing';

import { ReverseLinkListService } from './reverse-link-list.service';

describe('ReverseLinkListService', () => {
  let service: ReverseLinkListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseLinkListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
