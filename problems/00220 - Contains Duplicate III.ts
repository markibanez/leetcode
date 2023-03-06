// You are given an integer array nums and two integers indexDiff and valueDiff.
// Find a pair of indices (i, j) such that:
// i != j,
// abs(i - j) <= indexDiff.
// abs(nums[i] - nums[j]) <= valueDiff, and
// Return true if such pair exists or false otherwise.

// Example 1:
// Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
// Output: true
// Explanation: We can choose (i, j) = (0, 3).
// We satisfy the three conditions:
// i != j --> 0 != 3
// abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
// abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

// Example 2:
// Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
// Output: false
// Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

// Constraints:
// 2 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// 1 <= indexDiff <= nums.length
// 0 <= valueDiff <= 10^9

function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const key = Math.floor(nums[i] / (valueDiff + 1));
        if (
            map.has(key) ||
            (map.has(key - 1) && nums[i] - map.get(key - 1)! <= valueDiff) ||
            (map.has(key + 1) && map.get(key + 1)! - nums[i] <= valueDiff)
        ) {
            return true;
        }
        map.set(key, nums[i]);
        if (i >= indexDiff) map.delete(Math.floor(nums[i - indexDiff] / (valueDiff + 1)));
    }
    return false;
};

// test cases
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)); // false