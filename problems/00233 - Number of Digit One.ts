// Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

// Example 1:
// Input: n = 13
// Output: 6

// Example 2:
// Input: n = 0
// Output: 0

// Constraints:
// 0 <= n <= 10^9

function countDigitOne(n: number): number {
    let result = 0;
    for (let i = 1; i <= n; i *= 10) {
        const divider = i * 10;
        result += Math.floor(n / divider) * i + Math.min(Math.max(n % divider - i + 1, 0), i);
    }
    return result;
};

// test cases
console.log(countDigitOne(13)); // 6
console.log(countDigitOne(0)); // 0