// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'.
// Read this character in if it is either.
// This determines if the final result is negative or positive respectively.
// Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached.
// The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
// If no digits were read, then the integer is 0.
// Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range.
// Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
// Return the integer as the final result.
// Note:
// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// Example 1:
// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.

// Example 2:
// Input: s = "   -42"
// Output: -42

// Example 3:
// Input: s = "4193 with words"
// Output: 4193

// Example 4:
// Input: s = "words and 987"
// Output: 987

// Constraints:
// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

function myAtoi(s: string): number {
    s = s.trim();
    const isNegative = s.startsWith('-');
    const isPositive = s.startsWith('+');
    const isNumber = (c: string) => c >= '0' && c <= '9';
    const isWhitespace = (c: string) => c === ' ';
    const isSign = (c: string) => c === '-' || c === '+';
    let result = '';
    let isStarted = false;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (isStarted) {
            if (isNumber(c)) {
                result += c;
            } else {
                break;
            }
        } else {
            if (isNumber(c)) {
                result += c;
                isStarted = true;
            } else if (isSign(c)) {
                isStarted = true;
            } else if (!isWhitespace(c)) {
                break;
            }
        }
    }

    const number = Number(result) * (isNegative ? -1 : 1) ;
    if (number > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    }

    if (number < (-2) ** 31) {
        return (-2) ** 31;
    }

    return number;
}

// test cases
console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('words and 987')); // 987
