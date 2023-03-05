// Suppose you're given a set which originally contains numbers from 1 to n. Unfortunately, due to a data error, one of the numbers in the set got duplicated to another number in the set, which results in a repetition of one number and a loss of another number.
// Given an array nums representing the data status of this set after the error, find and return the number that occurs twice and the number that is missing in the form of an array.

// Example 1:
// Input: nums = [1,2,3,4,3]
// Output: [3,5]
// Explanation:
// 3 is repeated twice and 5 is missing.

// Example 2:
// Input: nums = [1,2,2]
// Output: [2,3]
// Explanation:
// 2 is repeated twice and 3 is missing.

function findErrorNums(nums) {
    let sum = 0;
    let set = new Set();
    let duplicate = 0;
    let missing = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (set.has(nums[i])) {
            duplicate = nums[i];
        }
        set.add(nums[i]);
    }
    missing = (nums.length * (nums.length + 1) / 2) - (sum - duplicate);
    return [duplicate, missing];
}

// test cases
console.log(findErrorNums([1, 2, 3, 4, 3])); // [3, 5]
console.log(findErrorNums([1, 2, 2])); // [2, 3]
