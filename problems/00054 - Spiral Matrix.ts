// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    const m = matrix.length;
    const n = matrix[0].length;
    const visited: boolean[][] = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let direction = 0;
    let row = 0;
    let col = 0;
    while (result.length < m * n) {
        result.push(matrix[row][col]);
        visited[row][col] = true;
        const nextRow = row + directions[direction][0];
        const nextCol = col + directions[direction][1];
        if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || visited[nextRow][nextCol]) {
            direction = (direction + 1) % 4;
        }
        row += directions[direction][0];
        col += directions[direction][1];
    }
    return result;
};

// test cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]