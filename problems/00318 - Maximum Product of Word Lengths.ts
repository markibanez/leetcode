// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

// Example 1:
// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".

// Example 2:
// Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".

// Example 3:
// Input: words = ["a","aa","aaa","aaaa"]
// Output: 0
// Explanation: No such pair of words.

// Constraints:
// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] consists only of lowercase English letters.

function maxProduct(words: string[]): number {
  let result = 0;
  let masks = new Array(words.length).fill(0);
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      masks[i] |= 1 << (words[i][j].charCodeAt(0) - 'a'.charCodeAt(0));
    }
    for (let j = 0; j < i; j++) {
      if ((masks[i] & masks[j]) === 0) {
        result = Math.max(result, words[i].length * words[j].length);
      }
    }
  }
  return result;
}

// test cases
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])); // 16
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"])); // 4
console.log(maxProduct(["a", "aa", "aaa", "aaaa"])); // 0