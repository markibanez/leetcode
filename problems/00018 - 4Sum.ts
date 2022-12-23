// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Constraints:
// 1 <= nums.length <= 200
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9

function fourSum(nums: number[], target: number): number[][] {
    let result: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let k = j + 1;
            let l = nums.length - 1;
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    while (k < l && nums[k] === nums[k - 1]) {
                        k++;
                    }
                    l--;
                    while (k < l && nums[l] === nums[l + 1]) {
                        l--;
                    }
                } else if (sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
        }
    }
    return result;
};

// test cases
console.log(fourSum([1,0,-1,0,-2,2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)); // [[2,2,2,2]]
