// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let current: ListNode | null = head;
    let previous = null;
    while (current) {
        const temp: ListNode | null = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    return previous;
};

// test cases
console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))); // [5,4,3,2,1]
console.log(reverseList(new ListNode(1, new ListNode(2)))); // [2,1]