// Given a string s, partition s such that every substring of the partition is a palindrome.
// Return the minimum cuts needed for a palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.

// Example 2:
// Input: s = "a"
// Output: 0

// Example 3:
// Input: s = "ab"
// Output: 1

// Example 4:
// Input: s = "ababbbabbaba"
// Output: 3

// Constraints:
// 1 <= s.length <= 2000
// s consists of lowercase English letters only.

function minCut(s: string): number {
    const n = s.length;
    const dp: number[] = Array(n).fill(0);
    const isPalindrome: boolean[][] = Array(n).fill(0).map(() => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i] = i;
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && (i - j < 2 || isPalindrome[j + 1][i - 1])) {
                isPalindrome[j][i] = true;
                dp[i] = j === 0 ? 0 : Math.min(dp[i], dp[j - 1] + 1);
            }
        }
    }

    return dp[n - 1];
};

// test cases
console.log(minCut("aab")); // 1
console.log(minCut("a")); // 0
console.log(minCut("ab")); // 1
console.log(minCut("ababbbabbaba")); // 3