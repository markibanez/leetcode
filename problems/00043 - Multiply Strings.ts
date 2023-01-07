// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"

// Constraints:
// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

function add(num1: string, num2: string): string {
    let result = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += Number(num1[i]);
            i--;
        }
        if (j >= 0) {
            sum += Number(num2[j]);
            j--;
        }
        result = String(sum % 10) + result;
        carry = Math.floor(sum / 10);
    }
    if (carry !== 0) {
        result = String(carry) + result;
    }
    return result;
}

function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    let result = "0";
    for (let i = num2.length - 1; i >= 0; i--) {
        let carry = 0;
        let temp = "";
        for (let j = num2.length - 1; j > i; j--) {
            temp += "0";
        }
        for (let j = num1.length - 1; j >= 0; j--) {
            let product = (Number(num2[i]) * Number(num1[j])) + carry;
            temp = String(product % 10) + temp;
            carry = Math.floor(product / 10);
        }
        if (carry !== 0) {
            temp = String(carry) + temp;
        }
        result = add(result, temp);
    }
    return result;
}

// test cases
console.log(multiply("2", "3")); // "6"
console.log(multiply("123", "456")); // "56088"