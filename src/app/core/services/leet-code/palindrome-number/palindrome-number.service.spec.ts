import { TestBed } from '@angular/core/testing';

import { PalindromeNumberService } from './palindrome-number.service';

describe('PalindromeNumberService', () => {
  let service: PalindromeNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalindromeNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be a palidrome', () => {
    const input = 121;
    expect(service).toBeTruthy();
  });

  it('should NOT be a palidrome', () => {
    expect(service).toBeTruthy();
  });

});
