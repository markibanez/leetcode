// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Example 1:
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

// Example 2:
// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

// Constraints:
// The number of nodes in the tree is in the range [2, 1000].
// -231 <= Node.val <= 231 - 1

// Follow up: A solution using O(n) space is pretty straight-forward. Could you devise a constant O(1) space solution?

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

function recoverTree(root: TreeNode | null): void {
    let first: TreeNode | null = null;
    let second: TreeNode | null = null;
    let prev: TreeNode | null = null;
    let stack: TreeNode[] = [];
    while (root !== null || stack.length > 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop()!;
        if (prev !== null && prev.val > root.val) {
            if (first === null) {
                first = prev;
            }
            second = root;
        }
        prev = root;
        root = root.right;
    }
    if (first !== null && second !== null) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
};

// test cases
const root1 = new TreeNode(1, null, new TreeNode(3, null, new TreeNode(2)));
recoverTree(root1);
console.log(root1); // [3,1,null,null,2]
const root2 = new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2), null));
recoverTree(root2);
console.log(root2); // [2,1,4,null,null,3]
