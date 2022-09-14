import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LeapyearService {
    constructor() {}

    public isLeapYear(year: number): boolean {
        return year % 4 === 0;
    }
}
