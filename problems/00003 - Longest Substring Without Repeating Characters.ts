// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 1 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let current = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            current = Math.min(current + 1, i - map.get(s[i]));
        } else {
            current++;
        }
        map.set(s[i], i);
        longest = Math.max(longest, current);
    }
    console.log({ longest, current, map });
    return longest;
};

// test cases
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));