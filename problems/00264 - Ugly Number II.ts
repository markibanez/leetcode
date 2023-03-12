// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return the nth ugly number.

// Example 1:
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

// Example 2:
// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// Constraints:
// 1 <= n <= 1690

function nthUglyNumber(n: number): number {
    const ugly = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    while (ugly.length < n) {
        const next2 = ugly[i2] * 2;
        const next3 = ugly[i3] * 3;
        const next5 = ugly[i5] * 5;
        const next = Math.min(next2, next3, next5);
        if (next === next2) {
            i2++;
        }
        if (next === next3) {
            i3++;
        }
        if (next === next5) {
            i5++;
        }
        ugly.push(next);
    }
    return ugly[n - 1];
};

// test cases
console.log(nthUglyNumber(10)); // 12
console.log(nthUglyNumber(1)); // 1