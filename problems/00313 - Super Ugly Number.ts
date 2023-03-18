// A super ugly number is a positive integer whose prime factors are in the array primes.
// Given an integer n and an array of integers primes, return the nth super ugly number.
// The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

// Example 1:
// Input: n = 12, primes = [2,7,13,19]
// Output: 32
// Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].

// Example 2:
// Input: n = 1, primes = [2,3,5]
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].

// Constraints:
// 1 <= n <= 10^5
// 1 <= primes.length <= 100
// 2 <= primes[i] <= 1000
// primes[i] is guaranteed to be a prime number.
// All the values of primes are unique and sorted in ascending order.

function nthSuperUglyNumber(n: number, primes: number[]): number {
  let uglyNumbers = [1];
  let pointers = new Array(primes.length).fill(0);
  while (uglyNumbers.length < n) {
    let nextUglyNumber = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < primes.length; i++) {
      nextUglyNumber = Math.min(nextUglyNumber, primes[i] * uglyNumbers[pointers[i]]);
    }
    uglyNumbers.push(nextUglyNumber);
    for (let i = 0; i < primes.length; i++) {
      if (nextUglyNumber === primes[i] * uglyNumbers[pointers[i]]) {
        pointers[i]++;
      }
    }
  }
  return uglyNumbers[n - 1];
}

// test cases
console.log(nthSuperUglyNumber(12, [2, 7, 13, 19])); // 32
console.log(nthSuperUglyNumber(1, [2, 3, 5])); // 1