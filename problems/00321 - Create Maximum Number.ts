// You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent the digits of two numbers. You are also given an integer k.
// Create the maximum number of length k <= m + n from digits of the two numbers. The relative order of the digits from the same array must be preserved.
// Return an array of the k digits representing the answer.

// Example 1:
// Input: nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5
// Output: [9,8,6,5,3]

// Example 2:
// Input: nums1 = [6,7], nums2 = [6,0,4], k = 5
// Output: [6,7,6,0,4]

// Example 3:
// Input: nums1 = [3,9], nums2 = [8,9], k = 3
// Output: [9,8,9]

// Constraints:
// m == nums1.length
// n == nums2.length
// 1 <= m, n <= 500
// 0 <= nums1[i], nums2[i] <= 9
// 1 <= k <= m + n

function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
  const maxArray = (nums: number[], k: number): number[] => {
    const stack = [];
    const n = nums.length;
    let remaining = n - k;
    for (const num of nums) {
      while (stack.length && stack[stack.length - 1] < num && remaining > 0) {
        stack.pop();
        remaining--;
      }
      stack.push(num);
    }
    return stack.slice(0, k);
  };

  const merge = (nums1: number[], nums2: number[]): number[] => {
    const result: number[] = [];
    while (nums1.length || nums2.length) {
      const [a, b] = [nums1.join(''), nums2.join('')];
      result.push(a > b ? nums1.shift()! : nums2.shift()!);
    }
    return result;
  };

  let result: number[] = [];
  for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); i++) {
    const candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i));
    if (candidate.join('') > result.join('')) {
      result = candidate;
    }
  }
  return result;
}

// test cases
console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5)); // [9,8,6,5,3]
console.log(maxNumber([6, 7], [6, 0, 4], 5)); // [6,7,6,0,4]
console.log(maxNumber([3, 9], [8, 9], 3)); // [9,8,9]