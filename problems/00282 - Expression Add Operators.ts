// Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.
// Note that operands in the returned expressions should not contain leading zeros.

// Example 1:
// Input: num = "123", target = 6
// Output: ["1*2*3","1+2+3"]
// Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.

// Example 2:
// Input: num = "232", target = 8
// Output: ["2*3+2","2+3*2"]
// Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.

// Example 3:
// Input: num = "3456237490", target = 9191
// Output: []
// Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.

// Constraints:
// 1 <= num.length <= 10
// num consists of only digits.
// -2^31 <= target <= 2^31 - 1

function addOperators(num: string, target: number): string[] {
    const result: string[] = [];
    const dfs = (index: number, prev: number, curr: number, str: string) => {
        if (index === num.length) {
            if (curr === target) {
                result.push(str);
            }
            return;
        }
        for (let i = index; i < num.length; i++) {
            const s = num.substring(index, i + 1);
            if (s.length > 1 && s[0] === '0') {
                break;
            }
            const n = Number(s);
            if (index === 0) {
                dfs(i + 1, n, n, s);
            } else {
                dfs(i + 1, n, curr + n, str + '+' + s);
                dfs(i + 1, -n, curr - n, str + '-' + s);
                dfs(i + 1, prev * n, curr - prev + prev * n, str + '*' + s);
            }
        }
    };
    dfs(0, 0, 0, '');
    return result;
};

// test cases
console.log(addOperators('123', 6)); // ["1*2*3","1+2+3"]
console.log(addOperators('232', 8)); // ["2*3+2","2+3*2"]
console.log(addOperators('3456237490', 9191)); // []