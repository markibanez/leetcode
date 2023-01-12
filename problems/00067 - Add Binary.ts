// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

function addBinary(a: string, b: string): string {
    let carry = 0, res = '';
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry; i--, j--) {
        let sum = carry;
        if (i >= 0) sum += +a[i];
        if (j >= 0) sum += +b[j];
        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }
    return res;
};

// test cases
console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"