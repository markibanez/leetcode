// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

// Follow up: Could you minimize the total number of operations done?

function moveZeroes(nums: number[]): void {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j++] = nums[i];
        }
    }
    for (; j < nums.length; j++) {
        nums[j] = 0;
    }
};

// test cases
let test283 = [0, 1, 0, 3, 12];
moveZeroes(test283);
console.log(test283); // [1, 3, 12, 0, 0]

test283 = [0];
moveZeroes(test283);
console.log(test283); // [0]