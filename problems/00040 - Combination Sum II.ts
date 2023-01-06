// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [[1,1,6],[1,2,5],[1,7],[2,6]]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [[1,2,2],[5]]

// Constraints:
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const path: number[] = [];
    const backtrack = (start: number, sum: number) => {
        if (sum === target) {
            result.push([...path]);
            return;
        }
        if (sum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]);
            backtrack(i + 1, sum + candidates[i]);
            path.pop();
        }
    };
    candidates.sort((a, b) => a - b);
    backtrack(0, 0);
    return result;
};

// test cases
console.log(combinationSum2([10,1,2,7,6,1,5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2,5,2,1,2], 5)); // [[1,2,2],[5]]