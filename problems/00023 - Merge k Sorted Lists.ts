// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// Constraints:
// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 10^4.

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // implement self contained function
    function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }
        if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
    }

    // merge lists
    let mergedList: ListNode | null = null;
    for (let i = 0; i < lists.length; i++) {
        mergedList = mergeTwoLists(mergedList, lists[i]);
    }
    return mergedList;
}

// test cases
let list1: ListNode | null = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2: ListNode | null = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3: ListNode | null = new ListNode(2, new ListNode(6));
console.log(mergeKLists([list1, list2, list3])); // [1,1,2,3,4,4,5,6]

console.log(mergeKLists([])); // []

list1 = null;
list2 = null;
list3 = null;
console.log(mergeKLists([list1, list2, list3])); // []
