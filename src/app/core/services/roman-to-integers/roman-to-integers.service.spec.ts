import { TestBed } from '@angular/core/testing';
import { RomanToIntegersService } from './roman-to-integers.service';

describe('RomanToIntegersService', () => {
  let service: RomanToIntegersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanToIntegersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 3', () => {
   const input = 'III';
   expect(service.romanToInt(input)).toEqual(3);
  });

  it('should return 58', () => {
    const input = 'LVIII';
    expect(service.romanToInt(input)).toEqual(58);
  });

  it('should return 1994', () => {
    const input = 'MCMXCIV';
    expect(service.romanToInt(input)).toEqual(1994);
  });
});
