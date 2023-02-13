// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
// The steps of the insertion sort algorithm:
// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.
// The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Constraints:
// The number of nodes in the list is in the range [1, 5000].
// -5000 <= Node.val <= 5000

// @ts-ignore
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function insertionSortList(head: ListNode | null): ListNode | null {
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
console.log(insertionSortList(list1)); // [1, 2, 3, 4]

// @ts-ignore
const list2 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
console.log(insertionSortList(list2)); // [-1, 0, 3, 4, 5]