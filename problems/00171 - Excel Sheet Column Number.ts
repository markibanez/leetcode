// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

// Constraints:
// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].

function titleToNumber(columnTitle: string): number {
    let result = 0;
    for (const char of columnTitle) {
        result = result * 26 + char.charCodeAt(0) - 64;
    }
    return result;
};

// test cases
console.log(titleToNumber("A")); // 1
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701