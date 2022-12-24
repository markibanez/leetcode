// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const generate = (left: number, right: number, str: string) => {
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        }
        if (left > 0) {
            generate(left - 1, right, str + '(');
        }
        if (right > left) {
            generate(left, right - 1, str + ')');
        }
    };
    generate(n, n, '');
    return result;
};

// test cases
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
