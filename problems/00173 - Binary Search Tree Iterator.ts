// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

// Example 1:

// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]

// Explanation
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False

// Constraints:

// The number of nodes in the tree is in the range [1, 10^5].
// 0 <= Node.val <= 10^6
// At most 10^5 calls will be made to hasNext, and next.

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

class BSTIterator {
    private stack: TreeNode[] = [];
    constructor(root: TreeNode | null) {
        this.pushLeft(root);
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }

    next(): number {
        const node = this.stack.pop();
        this.pushLeft(node!.right);
        return node!.val;
    }

    private pushLeft(node: TreeNode | null) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }
}

// test cases
// @ts-ignore
const root = new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20)));
const bSTIterator = new BSTIterator(root);
console.log(bSTIterator.next()); // 3
console.log(bSTIterator.next()); // 7
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 9
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 15
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 20
console.log(bSTIterator.hasNext()); // false
