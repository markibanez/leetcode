// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:
// Input: num = 0
// Output: 0

// Constraints:
// 0 <= num <= 2^31 - 1

// Follow up: Could you do it without any loop/recursion in O(1) runtime?

function addDigits(num: number): number {
    return num === 0 ? 0 : (num - 1) % 9 + 1;
}

// test cases
console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0