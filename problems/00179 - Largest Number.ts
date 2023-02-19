// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:
// Input: nums = [10,2]
// Output: "210"

// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 10^9

function largestNumber(nums: number[]): string {
    return nums.sort((a, b) => {
        const aStr = a.toString();
        const bStr = b.toString();
        return parseInt(bStr + aStr) - parseInt(aStr + bStr);
    }).join('').replace(/^0+/, '') || '0';
};

// test cases
console.log(largestNumber([10,2])); // "210"
console.log(largestNumber([3,30,34,5,9])); // "9534330"