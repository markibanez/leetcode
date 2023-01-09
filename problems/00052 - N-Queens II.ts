// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example 1:
// Input: n = 4
// Output: 2

// Example 2:
// Input: n = 1
// Output: 1

// Constraints:
// 1 <= n <= 9

function totalNQueens(n: number): number {
    let result = 0;
    const board: string[][] = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
    const isValid = (row: number, col: number): boolean => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    };
    const backtrack = (row: number): void => {
        if (row === n) {
            result++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    };
    backtrack(0);
    return result;
};

// test cases
console.log(totalNQueens(4)); // 2
console.log(totalNQueens(1)); // 1