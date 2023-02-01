// Given two strings s and t, return the number of distinct subsequences of s which equals t.
// The test cases are generated so that the answer fits on a 32-bit signed integer.

// Example 1:

// Input: s = "rabbbit", t = "rabbit"
// Output: 3

// Example 2:
// Input: s = "babgbag", t = "bag"
// Output: 5

// Constraints:
// 1 <= s.length, t.length <= 1000
// s and t consist of English letters.

function numDistinct(s: string, t: string): number {
    if (!s || !t) return 0;
    const dp = Array(t.length + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= s.length; i++) {
        for (let j = t.length; j >= 1; j--) {
            if (s[i - 1] === t[j - 1]) dp[j] += dp[j - 1];
        }
    }
    return dp[t.length];
};

// test cases
console.log(numDistinct("rabbbit", "rabbit")); // 3
console.log(numDistinct("babgbag", "bag")); // 5