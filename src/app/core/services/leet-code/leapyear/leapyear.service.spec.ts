import { TestBed } from '@angular/core/testing';

import { LeapyearService } from './leapyear.service';

describe('LeapyearService', () => {
    let service: LeapyearService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LeapyearService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('A year is a leap year', () => {
        it('should be a leap year if year is divisable by 4', () => {
            [2020, 2016, 1984, 4].forEach((year) => {
                expect(service.isLeapYear(year)).toEqual(true);
            });
        });

        it('should be a leap year if year is divisable by 4 but not 100', () => {
            [8, 40, 104].forEach((year) => {
                expect(service.isLeapYear(year)).toEqual(true);
            });
        });

        it('should be a leap year if divisible by 100 but not 400 is not a leap year', () => {
            [100, 500, 1000].forEach((year) => {
                expect(service.isLeapYear(year)).toEqual(true);
            });
        });

        it('should be a leap year if divisible by 400', () => {
            [400, 800, 4000].forEach((year) => {
                expect(service.isLeapYear(year)).toEqual(true);
            });
        });
    });

    describe('A year is NOT a leap year', () => {
        it('should be a leap year if year is divisable by 4', () => {
            expect(service.isLeapYear(2020)).toEqual(false);
        });

        it('should be a leap year if year is divisable by 4 but not 100', () => {
            expect(service.isLeapYear(2020)).toEqual(false);
        });

        it('should be a leap year if divisible by 100 but not 400 is not a leap year', () => {
            expect(service.isLeapYear(2020)).toEqual(false);
        });

        it('should be a leap year if divisible by 400', () => {
            expect(service.isLeapYear(2020)).toEqual(false);
        });
    });

    describe('Year is not supported', () => {
        it('should not be a supported year of the years are negative ', () => {
            try {
                [-400, -800, -4000, -1].forEach((year) => {
                    expect(service.isLeapYear(year)).toEqual(true);
                });
            } catch (e) {}
        });

        it('should not be a supported year if the year is zero', () => {
            expect(service.isLeapYear(0)).toEqual(false);
        });
    });
});
