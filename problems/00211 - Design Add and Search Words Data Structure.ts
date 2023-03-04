// Design a data structure that supports adding new words and finding if a string matches any previously added string.
// Implement the WordDictionary class:
// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

// Example:
// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

// Constraints:
// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 3 dots in word for search queries.
// At most 10^4 calls will be made to addWord and search.

class WordDictionary {
    private children: Map<string, WordDictionary>;
    private isWord: boolean;
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }

    addWord(word: string): void {
        let current: WordDictionary | null = this;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!current!.children.has(char)) {
                current!.children.set(char, new WordDictionary());
            }
            current = current!.children.get(char)!;
        }
        current!.isWord = true;
    }

    search(word: string): boolean {
        let current: WordDictionary | null = this;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (char === '.') {
                for (const child of current!.children.values()) {
                    if (child.search(word.slice(i + 1))) {
                        return true;
                    }
                }
                return false;
            }
            if (!current!.children.has(char)) {
                return false;
            }
            current = current!.children.get(char)!;
        }
        return current!.isWord;
    }
}

// test cases
const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True