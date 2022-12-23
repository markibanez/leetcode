// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs: string[]): string {
    let prefix = "";
    let i = 0;
    let char = strs[0][i];
    while (char) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
        i++;
        char = strs[0][i];
    }
    return prefix;
};

// test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""