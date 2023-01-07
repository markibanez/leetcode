// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.

// Example 3:
// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

// Constraints:
// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'.

function isMatch(s: string, p: string): boolean {
    let i = 0;
    let j = 0;
    let star = -1;
    let match = 0;
    while (i < s.length) {
        if (j < p.length && (p[j] === "?" || p[j] === s[i])) {
            i++;
            j++;
        } else if (j < p.length && p[j] === "*") {
            star = j;
            match = i;
            j++;
        } else if (star !== -1) {
            j = star + 1;
            match++;
            i = match;
        } else {
            return false;
        }
    }
    while (j < p.length && p[j] === "*") {
        j++;
    }
    return j === p.length;
};

// test cases
console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "*")); // true
console.log(isMatch("cb", "?a")); // false
console.log(isMatch("adceb", "*a*b")); // true