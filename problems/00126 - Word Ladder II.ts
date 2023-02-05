// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
// Explanation: There are 2 shortest transformation sequences:
// "hit" -> "hot" -> "dot" -> "dog" -> "cog"
// "hit" -> "hot" -> "lot" -> "log" -> "cog"

// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: []
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:
// 1 <= beginWord.length <= 5
// endWord.length == beginWord.length
// 1 <= wordList.length <= 500
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.
// The sum of all shortest transformation sequences does not exceed 10^5.

function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    function canConnect(word1: string, word2: string) {
        let diff = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) diff++;
            if (diff > 1) return false;
        }
        return diff === 1;
    }

    const dict = new Set(wordList);
    if (!dict.has(endWord)) return [];

    dict.delete(beginWord);
    let queue = [beginWord];
    let nodes = [];

    let found = false;
    while (queue.length > 0 && !found) {
        nodes.push(queue.slice());

        let queueLength = queue.length;
        for (let i = 0; i < queueLength && !found; i++) {
            let from = queue.shift();

            for (let to of dict) {
                if (canConnect(from!, to) == false) continue;
                if (to == endWord) {
                    found = true;
                    break;
                }

                queue.push(to);
                dict.delete(to);
            }
        }
    }

    if (!found) return [];

    let result = [[endWord]];
    for (let level = nodes.length - 1; level >= 0; level--) {
        let resultLength = result.length;
        for (let i = 0; i < resultLength; i++) {
            let path = result.shift();
            let last = path![0];

            for (let node of nodes[level]) {
                if (!canConnect(last, node)) continue;
                result.push([node, ...path!]);
            }
        }
    }

    return result;
}

// test cases
console.log(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
console.log(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // []
