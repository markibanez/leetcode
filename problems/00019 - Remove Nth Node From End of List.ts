// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy: ListNode | null = new ListNode(0, head);
    let first: ListNode | null = dummy;
    let second: ListNode| null = dummy;
    for (let i = 1; i <= n + 1; i++) {
        first = first!.next;
    }
    while (first !== null) {
        first = first.next;
        second = second!.next;
    }
    second!.next = second!.next!.next;
    return dummy.next;
};

// test cases
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(removeNthFromEnd(head, 2)); // [1,2,3,5]
head = new ListNode(1);
console.log(removeNthFromEnd(head, 1)); // []
head = new ListNode(1, new ListNode(2));
console.log(removeNthFromEnd(head, 1)); // [1]