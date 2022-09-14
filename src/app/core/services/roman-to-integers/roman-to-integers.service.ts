import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanToIntegersService {

  constructor() { }

  public romanToInt(s: string): number {
    const romanArray = s.split('');
    const intArray = [];
    for (let i = 0; i < romanArray.length; i++) {
      if (romanArray[i] === 'I') {
        // intArray.unshift(i);
      }
    }

    let int = 0;
    // for (let i = 0; i < intArray.length; i++) {
    //   int = int + intArray[i];
    // }
    return int;
  }

}
