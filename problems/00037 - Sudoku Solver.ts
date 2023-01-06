// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Example 1:
// Input: board =
//     [["5","3",".",".","7",".",".",".","."]
//     ,["6",".",".","1","9","5",".",".","."]
//     ,[".","9","8",".",".",".",".","6","."]
//     ,["8",".",".",".","6",".",".",".","3"]
//     ,["4",".",".","8",".","3",".",".","1"]
//     ,["7",".",".",".","2",".",".",".","6"]
//     ,[".","6",".",".",".",".","2","8","."]
//     ,[".",".",".","4","1","9",".",".","5"]
//     ,[".",".",".",".","8",".",".","7","9"]]
// Output:
//     [["5","3","4","6","7","8","9","1","2"]
//     ,["6","7","2","1","9","5","3","4","8"]
//     ,["1","9","8","3","4","2","5","6","7"]
//     ,["8","5","9","7","6","1","4","2","3"]
//     ,["4","2","6","8","5","3","7","9","1"]
//     ,["7","1","3","9","2","4","8","5","6"]
//     ,["9","6","1","5","3","7","2","8","4"]
//     ,["2","8","7","4","1","9","6","3","5"]
//     ,["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.

function solveSudoku(board: string[][]): void {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const spaces: [number, number][] = [];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                const num = board[i][j].charCodeAt(0) - '1'.charCodeAt(0);
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                rows[i][num]++;
                columns[j][num]++;
                boxes[boxIndex][num]++;
            } else {
                spaces.push([i, j]);
            }
        }
    }

    const backtrack = (pos: number): boolean => {
        if (pos === spaces.length) {
            return true;
        }
        const [i, j] = spaces[pos];
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        for (let num = 0; num < 9; num++) {
            if (rows[i][num] + columns[j][num] + boxes[boxIndex][num] === 0) {
                rows[i][num]++;
                columns[j][num]++;
                boxes[boxIndex][num]++;
                board[i][j] = String.fromCharCode(num + '1'.charCodeAt(0));
                if (backtrack(pos + 1)) {
                    return true;
                }
                rows[i][num]--;
                columns[j][num]--;
                boxes[boxIndex][num]--;
            }
        }
        return false;
    }

    backtrack(0);
};

// test cases
const board =
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]];

solveSudoku(board);
console.log(board);