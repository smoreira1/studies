import { Injectable } from '@angular/core';
import { ListNode } from '../../../classes/list-node';

@Injectable({
    providedIn: 'root'
})
export class ReverseLinkListService {
    constructor() {}
    /*
      Time Complexity: O(n) 
      Auxiliary Space: O(1)
    */
    reverseIterative(linkedList: ListNode) {
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

    /*
        Time Complexity: O(n) 
        Auxiliary Space: O(n)
    */

    reverseRecursive(node: ListNode): ListNode {
        if (node == null || node.next == null) {
            return node;
        }
        let rest: ListNode = this.reverseRecursive(node.next);
        node.next.next = node;
        node.next = null;
        return rest;
    }
}
