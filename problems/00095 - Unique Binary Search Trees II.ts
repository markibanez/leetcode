// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

// Example 1:
// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

// Example 2:
// Input: n = 1
// Output: [[1]]

// Constraints:
// 1 <= n <= 8

// @ts-ignore
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

function generateTrees(n: number): Array<TreeNode | null> {
    if (n === 0) {
        return [];
    }
    return generateTreesHelper(1, n);
}

function generateTreesHelper(start: number, end: number): Array<TreeNode | null> {
    let result: Array<TreeNode | null> = [];
    if (start > end) {
        result.push(null);
        return result;
    }
    for (let i = start; i <= end; i++) {
        let leftSubtrees = generateTreesHelper(start, i - 1);
        let rightSubtrees = generateTreesHelper(i + 1, end);
        for (let left of leftSubtrees) {
            for (let right of rightSubtrees) {
                let root = new TreeNode(i);
                root.left = left;
                root.right = right;
                result.push(root);
            }
        }
    }
    return result;
}

// test cases
console.log(generateTrees(3)); // [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
console.log(generateTrees(1)); // [[1]]