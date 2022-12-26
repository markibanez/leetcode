// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.

// Example 3:
// Input: dividend = -1, divisor = -1
// Output: 1

// Example 4:
// Input: dividend = 2147483647, divisor = -1
// Output: -2147483647

// Constraints:
// -2^31 <= dividend, divisor <= 2^31 - 1
// divisor != 0

function divide(dividend: number, divisor: number): number {
    let quotient = 0;
    let remaining = dividend;

    if (dividend === 0) {
        return 0;
    }

    if (divisor === 1) {
        return dividend;
    }

    if (divisor === -1) {
        if (dividend <= (-2)**31) {
            return 2**31 - 1;
        }

        return -dividend;
    }

    if (dividend > 0 && divisor > 0) {
        while (remaining >= divisor) {
            remaining -= divisor;
            quotient++;
        }
    }

    if (dividend < 0 && divisor < 0) {
        while (remaining <= divisor) {
            remaining -= divisor;
            quotient++;
        }
    }

    if (dividend > 0 && divisor < 0) {
        while (remaining >= -divisor) {
            remaining += divisor;
            quotient--;
        }
    }

    if (dividend < 0 && divisor > 0) {
        while (remaining <= -divisor) {
            remaining += divisor;
            quotient--;
        }
    }

    if (quotient < (-2)**31) {
        return (-2)**31;
    }

    if (quotient > 2**31 - 1) {
        return 2**31 - 1;
    }

    return quotient;
};

// test cases
console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
console.log(divide(-1, -1)); // 1
console.log(divide(2147483647, -1)); // -2147483647