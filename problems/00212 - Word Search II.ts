// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Example 2:
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 10^4
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

class TrieNode {
    children: Map<string, TrieNode>;
    isWord: boolean;
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const dfs = (i: number, j: number, node: TrieNode, word: string, result: Set<string>) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return;
        }
        const char = board[i][j];
        if (char === '#' || !node.children.has(char)) {
            return;
        }
        word += char;
        node = node.children.get(char)!;
        if (node.isWord) {
            result.add(word);
        }
        board[i][j] = '#';
        dfs(i + 1, j, node, word, result);
        dfs(i - 1, j, node, word, result);
        dfs(i, j + 1, node, word, result);
        dfs(i, j - 1, node, word, result);
        board[i][j] = char;
    }

    const root = new TrieNode();
    for (const word of words) {
        let current = root;
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.isWord = true;
    }
    const result = new Set<string>();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(i, j, root, '', result);
        }
    }
    return Array.from(result);
};

// test cases
console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"])); // ["eat","oath"]
console.log(findWords([["a","b"],["c","d"]], ["abcb"])); // []