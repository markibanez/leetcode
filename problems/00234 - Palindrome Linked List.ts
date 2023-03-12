// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function isPalindrome(head: ListNode | null): boolean {
    const reverse = (head: ListNode | null): ListNode | null => {
        let prev: ListNode | null = null;
        let curr: ListNode | null = head;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    };

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    if (fast) {
        slow = slow!.next;
    }
    slow = reverse(slow);
    while (slow) {
        if (slow.val !== head!.val) {
            return false;
        }
        slow = slow.next;
        head = head!.next;
    }
    return true;
}

// test cases
console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))))); // true
console.log(isPalindrome(new ListNode(1, new ListNode(2)))); // false