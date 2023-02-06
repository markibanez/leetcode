// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]

// Constraints:
// 1 <= s.length <= 16
// s contains only lowercase English letters.

function partition(s: string): string[][] {
    const result: string[][] = [];

    function dfs(i: number, path: string[]) {
        if (i === s.length) {
            result.push([...path]);
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (isPalindrome(i, j)) {
                path.push(s.substring(i, j + 1));
                dfs(j + 1, path);
                path.pop();
            }
        }
    }

    function isPalindrome(i: number, j: number) {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    dfs(0, []);
    return result;
};

// test cases
console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
console.log(partition("a")); // [["a"]]