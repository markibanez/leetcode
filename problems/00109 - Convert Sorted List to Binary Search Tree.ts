// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a
// height-balanced binary search tree.

// Example 1:
// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

// Example 2:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in head is in the range [0, 2 * 104].
// -10^5 <= Node.val <= 10^5

// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
};

// @ts-ignore
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
};

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val);
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }
    prev!.next = null;
    let root = new TreeNode(slow!.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow!.next);
    return root;
};

// test cases
console.log(JSON.stringify(sortedListToBST(new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9)))))))); // [0,-3,9,-10,null,5]
console.log(JSON.stringify(sortedListToBST(null))); // []
