// Given the root of a complete binary tree, return the number of the nodes in the tree.
// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
// Design an algorithm that runs in less than O(n) time complexity.

// Example 1:
// Input: root = [1,2,3,4,5,6]
// Output: 6

// Example 2:
// Input: root = []
// Output: 0

// Example 3:
// Input: root = [1]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [0, 5 * 10^4].
// 0 <= Node.val <= 5 * 10^4
// The tree is guaranteed to be complete.

// @ts-ignore
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function countNodes(root: TreeNode | null): number {
    const countLevel = (root: TreeNode | null): number => {
        let level = 0;
        while (root) {
            level++;
            root = root.left;
        }

        return level;
    }

    if (!root) return 0;
    const left = countLevel(root.left);
    const right = countLevel(root.right);
    if (left === right) return countNodes(root.right) + (1 << left);
    else return countNodes(root.left) + (1 << right);
};

// test cases
console.log(countNodes(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6))))); // 6
console.log(countNodes(null)); // 0
console.log(countNodes(new TreeNode(1))); // 1