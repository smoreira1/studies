import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FizzbuzzService {
    constructor() {}

    fizzBuzz(n: number): string {
        if (n % 15 === 0) {
            return 'FizzBuzz';
        } else if (n % 3 === 0) {
            return 'Fizz';
        } else if (n % 5 === 0) {
            return 'Buzz';
        } else {
            return '';
        }
    }
}
