// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Example 1:
// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]

// Example 2:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 10^4].
// -1000 <= Node.val <= 1000

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

function serialize(root: TreeNode | null): string {
    if (!root) {
        return 'null';
    }
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
};

function deserialize(data: string): TreeNode | null {
    const deserializeHelper = (nodes: string[]): TreeNode | null => {
        const node = nodes.shift();
        if (node === 'null') {
            return null;
        }
        const root = new TreeNode(Number(node));
        root.left = deserializeHelper(nodes);
        root.right = deserializeHelper(nodes);
        return root;
    };

    const nodes = data.split(',');
    return deserializeHelper(nodes);
};

// test cases
const p297tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const p297serializedTree1 = serialize(p297tree1);
console.log(p297serializedTree1);
console.log(deserialize(p297serializedTree1));