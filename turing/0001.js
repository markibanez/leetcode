// Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Constraints:
// 1 <= s.length <= 10^4
// s consists of parentheses only '()[]{}'.

// Example 1:
// Input: s = "()"
// Output: valid

// Example 2:
// Input: s = "()[]{}"
// Output: valid

// Example 3:
// Input: s = "(]"
// Output: invalid

// Example 4:
// Input: s = "([)]"
// Output: invalid

// Example 5:
// Input: s = "{[]}"
// Output: valid

function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map[last]) return false;
        }
    }
    if (stack.length !== 0) return false;
    return true;
};

// test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true