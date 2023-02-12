// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

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

// @ts-ignore
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    let stack: TreeNode[] = [];
    let current: TreeNode | null = root;
    while (current || stack.length) {
        while (current) {
            result.push(current.val);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!.right;
    }
    return result;
};

// test cases
// @ts-ignore
const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(preorderTraversal(tree1)); // [1, 2, 3]

// @ts-ignore
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, new TreeNode(6), new TreeNode(7)));
console.log(preorderTraversal(tree2)); // [1, 2, 3, 4, 5, 6, 7]