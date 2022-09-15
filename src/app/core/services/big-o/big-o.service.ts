import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BigOService {
    constructor() {}

    //* O(1) Constant time. Regardless of how large the array is the function does nothing with the elements resulting in constant time.
    public constantTime(array: []) {
        console.log(array);
        return;
    }

    //* O(log(n)) Linear time example 1
    public logTime(array: []) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }

    //* O(n) Linear time example 1
    public linearTime(array: []) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }

    //* O(n) Linear time example 2
    public linearTime2(array: []) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
        for (let j = 0; j < array.length; j++) {
            console.log(array[j]);
        }
    }

    //* O(n) Linear time example 2
    public nLognTime(array: []) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
        for (let j = 0; j < array.length; j++) {
            console.log(array[j]);
        }
    }

    //* O(nSquare) time.
    public squareTime(n: number) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; i++) {
                console.log(i + j);
            }
        }
    }

    //* O(nCubic) time. Can also be called polynomial
    public cubicTime(n: number) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; i++) {
                for (let k = 0; k < n; k++) {
                    console.log(i + j + k);
                }
            }
        }
    }

    //* O(exponential) time.
    public exponentialTime(n: number) {}

    //* O(exponential) time.
    public factorialTime(n: number) {}
}
