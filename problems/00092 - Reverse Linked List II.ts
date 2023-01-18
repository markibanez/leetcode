// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

// Constraints:
// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

// Follow up: Could you do it in one pass?

// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let dummy = new ListNode(0, head);
    let prev: ListNode | null = dummy;
    for (let i = 0; i < left - 1; i++) {
        prev = prev!.next;
    }
    let curr = prev!.next;
    for (let i = 0; i < right - left; i++) {
        let next = curr!.next;
        curr!.next = next!.next;
        next!.next = prev!.next;
        prev!.next = next;
    }
    return dummy.next;
}

// test cases
// @ts-ignore
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseBetween(head, 2, 4)); // [1,4,3,2,5]

head = new ListNode(5);
console.log(reverseBetween(head, 1, 1)); // [5]