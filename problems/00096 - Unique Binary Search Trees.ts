// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Example 1:
// Input: n = 3
// Output: 5

// Example 2:
// Input: n = 1
// Output: 1

// Constraints:
// 1 <= n <= 19

function numTrees(n: number): number {
    const dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = 0;
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];
};

// test cases
console.log(numTrees(3)); // 5
console.log(numTrees(1)); // 1