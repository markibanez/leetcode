// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:
// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 10^9

// @ts-ignore
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    tail.next = head;
    let newTail: ListNode | null = head;
    for (let i = 0; i < length - k % length - 1; i++) {
        newTail = newTail!.next;
    }
    let newHead = newTail!.next;
    newTail!.next = null;
    return newHead;
};

// test cases
const testList1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const testList2 = new ListNode(0, new ListNode(1, new ListNode(2)));
console.log(rotateRight(testList1, 2)); // [4,5,1,2,3]
console.log(rotateRight(testList2, 4)); // [2,0,1]
