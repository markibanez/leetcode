// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of the nodes in the tree is in the range [0, 100].
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

function postorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    let stack: TreeNode[] = [];
    let current: TreeNode | null = root;
    while (current || stack.length) {
        while (current) {
            result.unshift(current.val);
            stack.push(current);
            current = current.right;
        }
        current = stack.pop()!.left;
    }
    return result;
};

// test cases
// @ts-ignore
const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(postorderTraversal(tree1)); // [3, 2, 1]

// @ts-ignore
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, new TreeNode(6), new TreeNode(7)));
console.log(postorderTraversal(tree2)); // [3, 4, 2, 6, 7, 5, 1]