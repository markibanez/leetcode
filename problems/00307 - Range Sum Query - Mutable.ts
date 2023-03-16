// Given an integer array nums, handle multiple queries of the following types:

// Update the value of an element in nums.
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// void update(int index, int val) Updates the value of nums[index] to be val.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Example 1:
// Input
// ["NumArray", "sumRange", "update", "sumRange"]
// [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
// Output
// [null, 9, null, 8]

// Explanation
// NumArray numArray = new NumArray([1, 3, 5]);
// numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
// numArray.update(1, 2);   // nums = [1, 2, 5]
// numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8

// Constraints:

// 1 <= nums.length <= 3 * 10^4
// -100 <= nums[i] <= 100
// 0 <= index < nums.length
// -100 <= val <= 100
// 0 <= left <= right < nums.length
// At most 3 * 10^4 calls will be made to update and sumRange.

// @ts-ignore
class NumArray {
    private tree: number[];
    private n: number;
    constructor(nums: number[]) {
        this.n = nums.length;
        this.tree = new Array(this.n * 2);
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = nums[i];
        }
        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    update(index: number, val: number): void {
        index += this.n;
        this.tree[index] = val;
        while (index > 0) {
            let left = index;
            let right = index;
            if (index % 2 === 0) {
                right = index + 1;
            } else {
                left = index - 1;
            }
            this.tree[Math.floor(index / 2)] = this.tree[left] + this.tree[right];
            index = Math.floor(index / 2);
        }
    }

    sumRange(left: number, right: number): number {
        left += this.n;
        right += this.n;
        let sum = 0;
        while (left <= right) {
            if (left % 2 === 1) {
                sum += this.tree[left];
                left++;
            }
            if (right % 2 === 0) {
                sum += this.tree[right];
                right--;
            }
            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
        }
        return sum;
    }
}

// test cases
let p307numArray = new NumArray([1, 3, 5]);
console.log(p307numArray.sumRange(0, 2)); // return 1 + 3 + 5 = 9
// @ts-ignore
p307numArray.update(1, 2); // nums = [1, 2, 5]
console.log(p307numArray.sumRange(0, 2)); // return 1 + 2 + 5 = 8