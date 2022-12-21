// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }
    const rows = new Array(numRows).fill('');
    let i = 0;
    let direction = 1;
    for (const c of s) {
        rows[i] += c;
        i += direction;
        if (i === 0 || i === numRows - 1) {
            direction *= -1;
        }
    }
    return rows.join('');
};

// test cases
console.log(convert('PAYPALISHIRING', 3)); // 'PAHNAPLSIIGYIR'
console.log(convert('PAYPALISHIRING', 4)); // 'PINALSIGYAHRPI'
console.log(convert('A', 1)); // 'A'