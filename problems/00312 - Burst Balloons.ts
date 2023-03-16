// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.
// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.
// Return the maximum coins you can collect by bursting the balloons wisely.

// Example 1:
// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
// Example 2:

// Input: nums = [1,5]
// Output: 10

// Constraints:
// n == nums.length
// 1 <= n <= 300
// 0 <= nums[i] <= 100

function maxCoins(nums: number[]): number {
    const n = nums.length;
    const points = new Array(n + 2).fill(0);
    points[0] = points[n + 1] = 1;
    for (let i = 1; i <= n; i++) {
        points[i] = nums[i - 1];
    }
    const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
    for (let i = n; i >= 0; i--) {
        for (let j = i + 1; j < n + 2; j++) {
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + points[i] * points[k] * points[j]);
            }
        }
    }
    return dp[0][n + 1];
};

// test cases
console.log(maxCoins([3,1,5,8])); // 167
console.log(maxCoins([1,5])); // 10