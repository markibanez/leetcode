// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:
// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // get the length of the list
    let length: number = 0;
    let node: ListNode | null = head;
    while (node) {
        length++;
        node = node.next;
    }

    const quotient: number = Math.floor(length / k);

    // group nodes into k groups
    let groups: ListNode[][] = [];
    let group: ListNode[] = [];
    node = head;
    for (let i = 0; i < quotient; i++) {
        for (let j = 0; j < k; j++) {
            group.push(node);
            node = node.next;
        }
        groups.push(group);
        group = [];
    }

    // reverse each group
    for (let i = 0; i < groups.length; i++) {
        for (let j = 0; j < groups[i].length / 2; j++) {
            let temp: number = groups[i][j].val;
            groups[i][j].val = groups[i][groups[i].length - 1 - j].val;
            groups[i][groups[i].length - 1 - j].val = temp;
        }
    }

    // connect the groups
    for (let i = 0; i < groups.length - 1; i++) {
        groups[i][groups[i].length - 1].next = groups[i + 1][0];
    }

    // connect the last group to the rest of the list
    if (groups.length > 0) {
        groups[groups.length - 1][groups[groups.length - 1].length - 1].next = node;
    }

    return groups.length > 0 ? groups[0][0] : head;
};

// test cases
let list1: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseKGroup(list1, 2)); // [2,1,4,3,5]
let list2: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseKGroup(list2, 3)); // [3,2,1,4,5]
