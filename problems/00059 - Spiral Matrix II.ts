// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.

// Example 1:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// Example 2:
// Input: n = 1
// Output: [[1]]

// Constraints:
// 1 <= n <= 20

function generateMatrix(n: number): number[][] {
    let result: number[][] = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    let count = 1;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result[top][i] = count++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result[i][right] = count++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            result[bottom][i] = count++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            result[i][left] = count++;
        }
        left++;
    }
    return result;
}

// test cases
console.log(generateMatrix(3)); // [[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(1)); // [[1]]