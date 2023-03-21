// Given an integer array nums and two integers lower and upper, return the number of range sums that lie in [lower, upper] inclusive.
// Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j inclusive, where i <= j.

// Example 1:
// Input: nums = [-2,5,-1], lower = -2, upper = 2
// Output: 3
// Explanation: The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2.

// Example 2:
// Input: nums = [0], lower = 0, upper = 0
// Output: 1

// Constraints:
// 1 <= nums.length <= 10^5
// -2^31 <= nums[i] <= 2^31 - 1
// -10^5 <= lower <= upper <= 10^5
// The answer is guaranteed to fit in a 32-bit integer.

function countRangeSum(nums: number[], lower: number, upper: number): number {
  const countWhileMergeSort = (sums: number[], start: number, end: number, lower: number, upper: number): number => {
    if (end - start <= 1) return 0;
    const mid = Math.floor((start + end) / 2);
    let count = countWhileMergeSort(sums, start, mid, lower, upper) + countWhileMergeSort(sums, mid, end, lower, upper);
    let j = mid;
    let k = mid;
    let t = mid;
    const cache = new Array(end - start).fill(0);
    for (let i = start, r = 0; i < mid; i++, r++) {
      while (k < end && sums[k] - sums[i] < lower) k++;
      while (j < end && sums[j] - sums[i] <= upper) j++;
      while (t < end && sums[t] < sums[i]) cache[r++] = sums[t++];
      cache[r] = sums[i];
      count += j - k;
    }
    for (let i = 0; i < t - start; i++) {
      sums[start + i] = cache[i];
    }
    return count;
  };

  const n = nums.length;
  const sums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }
  return countWhileMergeSort(sums, 0, n + 1, lower, upper);
}

// test cases
console.log(countRangeSum([-2, 5, -1], -2, 2)); // 3
console.log(countRangeSum([0], 0, 0)); // 1