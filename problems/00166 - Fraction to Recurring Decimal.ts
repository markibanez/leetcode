// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
// If the fractional part is repeating, enclose the repeating part in parentheses.
// If multiple answers are possible, return any of them.
// It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

// Example 1:
// Input: numerator = 1, denominator = 2
// Output: "0.5"

// Example 2:
// Input: numerator = 2, denominator = 1
// Output: "2"

// Example 3:
// Input: numerator = 4, denominator = 333
// Output: "0.(012)"

// Example 4:
// Input: numerator = -50, denominator = 8
// Output: "-6.25"

// Constraints:
// -2^31 <= numerator, denominator <= 2^31 - 1
// denominator != 0

function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) {
        return "0";
    }
    const result: string[] = [];
    if (numerator > 0 && denominator < 0 || numerator < 0 && denominator > 0) {
        result.push("-");
    }
    const n = Math.abs(numerator);
    const d = Math.abs(denominator);
    result.push(Math.floor(n / d).toString());
    let remainder = n % d;
    if (remainder === 0) {
        return result.join("");
    }
    result.push(".");
    const map = new Map<number, number>();
    while (remainder !== 0) {
        if (map.has(remainder)) {
            result.splice(map.get(remainder)!, 0, "(");
            result.push(")");
            break;
        }
        map.set(remainder, result.length);
        remainder *= 10;
        result.push(Math.floor(remainder / d).toString());
        remainder %= d;
    }
    return result.join("");
};

// test cases
console.log(fractionToDecimal(1, 2)); // "0.5"
console.log(fractionToDecimal(2, 1)); // "2"
console.log(fractionToDecimal(4, 333)); // "0.(012)"
console.log(fractionToDecimal(-50, 8)); // "-6.25"