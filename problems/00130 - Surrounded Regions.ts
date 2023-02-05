// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example 1:
// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.

// Example 2:
// Input: board = [["X"]]
// Output: [["X"]]

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.

function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;

    function dfs(i: number, j: number) {
        if (i < 0 || i >= m || j < 0 || j >= n) return;
        if (board[i][j] !== 'O') return;

        board[i][j] = 'D';
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'D') board[i][j] = 'O';
            else if (board[i][j] === 'O') board[i][j] = 'X';
        }
    }
};

// test cases
// @ts-ignore
const board1 = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve(board1);
console.log(board1); // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// @ts-ignore
const board2 = [["X"]];
solve(board2);
console.log(board2); // [["X"]]