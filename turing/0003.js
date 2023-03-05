// Turing coding challenge
// Find the sume of all left leaves in a given binary tree
// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

// Example 2:
//      1
//     / \
//    2   3
//   / \
//  4   5

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function sumLeftLeaves(root) {
    if (!root) return 0;
    if (root.left && !root.left.left && !root.left.right) {
        return root.left.val + sumLeftLeaves(root.right);
    }
    return sumLeftLeaves(root.left) + sumLeftLeaves(root.right);
}

// test case
var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(sumLeftLeaves(root));

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(sumLeftLeaves(root));