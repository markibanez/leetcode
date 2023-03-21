// Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
// You may assume the input array always has a valid answer.

// Example 1:
// Input: nums = [1,5,1,1,6,4]
// Output: [1,6,1,5,1,4]
// Explanation: [1,4,1,5,1,6] is also accepted.

// Example 2:
// Input: nums = [1,3,2,2,3,1]
// Output: [2,3,1,3,1,2]

// Constraints:
// 1 <= nums.length <= 5 * 10^4
// 0 <= nums[i] <= 5000
// It is guaranteed that there will be an answer for the given input nums.

function wiggleSort(nums: number[]): void {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const mid = Math.floor((n - 1) / 2);
  const left = nums.slice(0, mid + 1);
  const right = nums.slice(mid + 1);
  for (let i = 0; i < n; i++) {
    nums[i] = i % 2 === 0 ? left.pop()! : right.pop()!;
  }
}

// test cases
const p324nums1 = [1, 5, 1, 1, 6, 4];
wiggleSort(p324nums1);
console.log(p324nums1); // [1,6,1,5,1,4]

const p324nums2 = [1, 3, 2, 2, 3, 1];
wiggleSort(p324nums2);
console.log(p324nums2); // [2,3,1,3,1,2]