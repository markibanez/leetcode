// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
// Implement the Trie class:
// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Example 1:
// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:
// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.

class Trie {
    private children: Map<string, Trie>;
    private isWord: boolean;
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }

    insert(word: string): void {
        let current: Trie | null = this;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!current!.children.has(char)) {
                current!.children.set(char, new Trie());
            }
            current = current!.children.get(char)!;
        }
        current!.isWord = true;
    }

    search(word: string): boolean {
        let current: Trie | null = this;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!current!.children.has(char)) {
                return false;
            }
            current = current!.children.get(char)!;
        }
        return current!.isWord;
    }

    startsWith(prefix: string): boolean {
        let current: Trie | null = this;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!current!.children.has(char)) {
                return false;
            }
            current = current!.children.get(char)!;
        }
        return true;
    }
}

// test cases
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true
