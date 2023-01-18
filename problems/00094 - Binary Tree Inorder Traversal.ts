// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    let stack: TreeNode[] = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop()!;
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
}

// test cases
let root: TreeNode | null = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root)); // [1,3,2]

root = null;
console.log(inorderTraversal(root)); // []

root = new TreeNode(1);
console.log(inorderTraversal(root)); // [1]
