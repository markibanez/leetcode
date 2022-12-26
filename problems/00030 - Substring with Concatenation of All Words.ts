// You are given a string s and an array of strings words. All the strings of words are of the same length.
// A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]

// Example 2:
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []

// Example 3:
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]

// Constraints:
// 1 <= s.length <= 10^4
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.

function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    const wordLength = words[0].length;
    const wordCount = words.length;
    const wordMap = new Map<string, number>();
    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
    for (let i = 0; i < s.length - wordLength * wordCount + 1; i++) {
        const seen = new Map<string, number>();
        let j = 0;
        while (j < wordCount) {
            const word = s.substr(i + j * wordLength, wordLength);
            if (!wordMap.has(word)) {
                break;
            }
            seen.set(word, (seen.get(word) || 0) + 1);
            if (seen.get(word) > wordMap.get(word)) {
                break;
            }
            j++;
        }
        if (j === wordCount) {
            result.push(i);
        }
    }
    return result;
};

// test cases
console.log(findSubstring("barfoothefoobarman", ["foo","bar"])); // [0,9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"])); // []