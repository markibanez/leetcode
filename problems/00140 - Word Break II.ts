// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]

// Example 2:
// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []

// Constraints:

// 1 <= s.length <= 20
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 10
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

// @ts-ignore
function wordBreak(s: string, wordDict: string[]): string[] {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    let result: string[] = [];
    if (dp[s.length]) {
        let dfs = (index: number, path: string) => {
            if (index === s.length) {
                result.push(path);
                return;
            }
            for (let i = index + 1; i <= s.length; i++) {
                if (wordDict.includes(s.substring(index, i))) {
                    dfs(i, path + (path.length > 0 ? " " : "") + s.substring(index, i));
                }
            }
        };
        dfs(0, "");
    }
    return result;
};

// test cases
console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"])); // ["cats and dog","cat sand dog"]
console.log(wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"])); // ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // []