// Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.
// Return a list of unique strings that are valid with the minimum number of removals. You may return the answer in any order.

// Example 1:
// Input: s = "()())()"
// Output: ["(())()","()()()"]

// Example 2:
// Input: s = "(a)())()"
// Output: ["(a())()","(a)()()"]

// Example 3:
// Input: s = ")("
// Output: [""]

// Constraints:
// 1 <= s.length <= 25
// s consists of lowercase English letters and parentheses '(' and ')'.
// There will be at most 20 parentheses in s.

function removeInvalidParentheses(s: string): string[] {
    const isValid = (str: string) => {
        let count = 0;
        for (const c of str) {
            if (c === '(') {
                count++;
            } else if (c === ')') {
                count--;
            }
            if (count < 0) {
                return false;
            }
        }
        return count === 0;
    };

    const result = new Set<string>();
    const queue = new Set<string>();
    queue.add(s);
    let found = false;
    while (queue.size) {
        const next = new Set<string>();
        for (const str of queue) {
            if (isValid(str)) {
                result.add(str);
                found = true;
            } else if (!found) {
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === '(' || str[i] === ')') {
                        next.add(str.slice(0, i) + str.slice(i + 1));
                    }
                }
            }
        }
        queue.clear();
        for (const str of next) {
            queue.add(str);
        }
    }
    return Array.from(result);
};

// test cases
console.log(removeInvalidParentheses('()())()')); // ["(())()","()()()"]
console.log(removeInvalidParentheses('(a)())()')); // ["(a())()","(a)()()"]
console.log(removeInvalidParentheses(')(')); // [""]