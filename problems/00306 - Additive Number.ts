// An additive number is a string whose digits can form an additive sequence.
// A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
// Given a string containing only digits, return true if it is an additive number or false otherwise.
// Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

// Example 1:
// Input: "112358"
// Output: true
// Explanation:
// The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
// 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

// Example 2:
// Input: "199100199"
// Output: true
// Explanation:
// The additive sequence is: 1, 99, 100, 199.
// 1 + 99 = 100, 99 + 100 = 199

// Constraints:
// 1 <= num.length <= 35
// num consists only of digits.

function isAdditiveNumber(num: string): boolean {
    const isValid = (first: string, second: string, third: string): boolean => {
        if (first.length > 1 && first[0] === '0') return false;
        if (second.length > 1 && second[0] === '0') return false;
        if (third.length > 1 && third[0] === '0') return false;
        let sum = (BigInt(first) + BigInt(second)).toString();
        if (sum === third) return true;
        if (sum.length > third.length) return false;
        if (sum !== third.slice(0, sum.length)) return false;
        return isValid(second, sum, third.slice(sum.length));
    }

    if (num.length < 3) return false;
    for (let i = 1; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            let first = num.slice(0, i);
            let second = num.slice(i, j);
            let third = num.slice(j);
            if (isValid(first, second, third)) return true;
        }
    }
    return false;
};

// test cases
console.log(isAdditiveNumber("112358")); // true
console.log(isAdditiveNumber("199100199")); // true