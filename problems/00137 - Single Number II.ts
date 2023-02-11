// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:
// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// -2^31 <= nums[i] <= 2^31 - 1
// Each element in nums appears exactly three times except for one element which appears once.

// @ts-ignore
function singleNumber(nums: number[]): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let sum = 0;
        for (let num of nums) {
            sum += (num >> i) & 1;
        }
        result |= (sum % 3) << i;
    }
    return result;
};

// test cases
console.log(singleNumber([2,2,3,2])); // 3
console.log(singleNumber([0,1,0,1,0,1,99])); // 99
