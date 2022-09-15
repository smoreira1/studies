import { TestBed } from '@angular/core/testing';

import { AddTwoNumbersService } from './add-two-numbers.service';

describe('AddTwoNumbersService', () => {
    let service: AddTwoNumbersService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AddTwoNumbersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be created', () => {
        expect(service.addTwoNumbers()).toBeTruthy();
    });
});
