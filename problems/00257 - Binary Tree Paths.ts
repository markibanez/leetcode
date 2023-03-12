// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:
// Input: root = [1]
// Output: ["1"]

// Constraints:
// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

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

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];
    const path: number[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }
        path.push(node.val);
        if (!node.left && !node.right) {
            result.push(path.join('->'));
        }
        dfs(node.left);
        dfs(node.right);
        path.pop();
    };
    dfs(root);
    return result;
}

// test cases
console.log(binaryTreePaths(new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3)))); // ["1->2->5","1->3"]
console.log(binaryTreePaths(new TreeNode(1))); // ["1"]