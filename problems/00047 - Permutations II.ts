// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:
// Input: nums = [1,1,2]
// Output: [[1,1,2],[1,2,1],[2,1,1]]

// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Constraints:
// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    const used: boolean[] = [];
    const path: number[] = [];
    nums.sort((a, b) => a - b);

    const backtracking = (path: number[], used: boolean[]) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtracking(path, used);
            used[i] = false;
            path.pop();
        }
    };

    backtracking(path, used);
    return result;
};

// test cases
console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]