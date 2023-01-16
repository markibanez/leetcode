// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:
// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]

// Example 2:
// Input: head = [2,1], x = 2
// Output: [1,2]

// Constraints:
// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
};

function partition(head: ListNode | null, x: number): ListNode | null {
    let lessThan = new ListNode();
    let greaterThan = new ListNode();
    let lessThanHead = lessThan;
    let greaterThanHead = greaterThan;
    while (head) {
        if (head.val < x) {
            lessThan.next = head;
            lessThan = lessThan.next;
        } else {
            greaterThan.next = head;
            greaterThan = greaterThan.next;
        }
        head = head.next;
    }
    lessThan.next = greaterThanHead.next;
    greaterThan.next = null;
    return lessThanHead.next;
};

// test cases
const test1 = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
console.log(partition(test1, 3)); // [1,2,2,4,3,5]

const test2 = new ListNode(2, new ListNode(1));
console.log(partition(test2, 2)); // [1,2]