// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

// Example 1:
// Input: left = 5, right = 7
// Output: 4

// Example 2:
// Input: left = 0, right = 0
// Output: 0

// Example 3:
// Input: left = 1, right = 2147483647
// Output: 0

// Constraints:
// 0 <= left <= right <= 2^31 - 1

function rangeBitwiseAnd(left: number, right: number): number {
    let shift = 0;
    while (left !== right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }
    return left << shift;
};

// test cases
console.log(rangeBitwiseAnd(5, 7)); // 4
console.log(rangeBitwiseAnd(0, 0)); // 0
console.log(rangeBitwiseAnd(1, 2147483647)); // 0