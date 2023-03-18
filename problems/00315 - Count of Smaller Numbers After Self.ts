// Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.

// Example 2:
// Input: nums = [-1]
// Output: [0]

// Example 3:
// Input: nums = [-1,-1]
// Output: [0,0]

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= num[i] <= 10^4

function countSmaller(nums: number[]): number[] {
  const binarySearch = (sorted: number[], target: number): number => {
    let left = 0;
    let right = sorted.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (sorted[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };

  let counts = new Array(nums.length).fill(0);
  let sorted: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let index = binarySearch(sorted, nums[i]);
    counts[i] = index;
    sorted.splice(index, 0, nums[i]);
  }
  return counts;
}

// test cases
console.log(countSmaller([5, 2, 6, 1])); // [2,1,1,0]
console.log(countSmaller([-1])); // [0]
console.log(countSmaller([-1, -1])); // [0,0]