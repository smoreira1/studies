import { Injectable } from '@angular/core';
import { ListNode } from '../../../classes/list-node';

@Injectable({
    providedIn: 'root'
})
export class AddTwoNumbersService {
    constructor() {}

    public addTwoNumbers(
        l1: ListNode | null,
        l2: ListNode | null
    ): ListNode | null {
        let head = null;

        let temp = null;

        let carry = 0;

        while (l1 !== null || l2 !== null) {
            let sum = carry;

            if (l1 !== null) {
                sum += l1.val;
                l1 = l1.next;
            }

            if (l2 !== null) {
                sum += l2.val;
                l2 = l2.next;
            }

            let node = new ListNode(Math.floor(sum) % 10);
            if (temp == null) {
                temp = head = node;
            }
            // For any other node
            else {
                temp.next = node;
                temp = temp.next;
            }
        }
        if (carry > 0) {
            temp!.next = new ListNode(carry);
        }
        return head;
    }

    reverse(linkedList: ListNode) {
        let prev = null;
        let current = linkedList;
        let next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next!;
        }
        linkedList = prev!;
        return linkedList;
    }
}

/*
Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/
