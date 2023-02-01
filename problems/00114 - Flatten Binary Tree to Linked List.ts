// Given the root of a binary tree, flatten the tree into a "linked list":
// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Example 1:
// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [0]
// Output: [0]

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

// Follow up: Can you flatten the tree in-place (with O(1) extra space)?

// @ts-ignore
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
};

function flatten(root: TreeNode | null): void {
    if (!root) return;
    if (root.left) {
        let left = root.left;
        while (left.right) {
            left = left.right;
        }
        left.right = root.right;
        root.right = root.left;
        root.left = null;
    }
    flatten(root.right);
};

// test cases
// @ts-ignore
const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, null, new TreeNode(6)));
flatten(root1);
console.log(root1); // [1,null,2,null,3,null,4,null,5,null,6]

// @ts-ignore
const root2 = new TreeNode(null);
flatten(root2);
console.log(root2); // []

// @ts-ignore
const root3 = new TreeNode(0);
flatten(root3);
console.log(root3); // [0]