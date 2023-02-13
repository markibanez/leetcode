// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 5 * 10^4].
// -10^5 <= Node.val <= 10^5

// @ts-ignore
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function sortList(head: ListNode | null): ListNode | null {
    let dummy = new ListNode();
    let current = head;
    while (current) {
        let prev = dummy;
        while (prev.next && prev.next.val < current.val) {
            prev = prev.next;
        }
        let next = current.next;
        current.next = prev.next;
        prev.next = current;
        current = next;
    }
    return dummy.next;
};

// test cases
// @ts-ignore
const list1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
console.log(sortList(list1)); // [1, 2, 3, 4]

// @ts-ignore
const list2 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
console.log(sortList(list2)); // [-1, 0, 3, 4, 5]

// @ts-ignore
const list3 = new ListNode();
console.log(sortList(list3)); // []