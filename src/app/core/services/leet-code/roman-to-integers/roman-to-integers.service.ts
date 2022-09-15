import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RomanToIntegersService {
    constructor() {}

    public romanToInt(romanString: string): number {
        let romanMap = new Map<string, number>();
        romanMap.set('I', 1);
        romanMap.set('V', 5);
        romanMap.set('X', 10);
        romanMap.set('L', 50);
        romanMap.set('C', 100);
        romanMap.set('D', 500);
        romanMap.set('M', 1000);

        const romanLength = romanString.length;
        let num: number = romanMap.get(romanString[romanLength - 1])!;
        for (let i = romanLength - 2; i >= 0; i--) {
            if (
                romanMap.get(romanString[i])! >=
                romanMap.get(romanString[i + 1])!
            ) {
                num += romanMap.get(romanString[i])!;
            } else {
                num -= romanMap.get(romanString[i])!;
            }
        }
        return num;
    }
}

/*

Approach
Maintain a map/dictionary with Roman symbols and their corresponding integer equivalent.
Scan the string from right to left. Get the value corresponding to the current character from the map/dictionary and add it to the result.
The special case is where there is a character at left of current character whose value is less than the value corresponding to the current character. For e.g. X represents 10 but IX represents 9. In this case, we will subtract the value of the character in the left from the result.


Constraints
1 ≤ s.length ≤ 15
s contains only the characters (I, V, X, L, C, D, M).
It is guaranteed that s is a valid Roman numeral in the range [1, 3999].

Time Complexity
The maximum length of the string can be 15, therefore, the worst case time complexity can be O(15) or O(1).

Space Complexity
We are using map/dictionary to store the Roman symbols and their corresponding integer values but there are only 7 symbols hence the worst case space complexity can be O{7} which is equivalent to O(1).


*/
