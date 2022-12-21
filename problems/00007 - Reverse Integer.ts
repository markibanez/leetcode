// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -2^31 <= x <= 2^31 - 1

function reverse(x: number): number {
    const isNegative = x < 0;
    const result = Number(Math.abs(x).toString().split('').reverse().join(''));
    if (result > 2 ** 31 - 1) {
        return 0;
    }
    return isNegative ? -result : result;
};

// test cases
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21