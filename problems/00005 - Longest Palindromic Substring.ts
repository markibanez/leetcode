// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function longestPalindrome(s: string): string {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const sub = s.slice(i, j);
            if (sub.length > result.length && isPalindrome(sub)) {
                result = sub;
            }
        }
    }
    return result;
}

// test cases
console.log(longestPalindrome('babad')); // 'bab'
console.log(longestPalindrome('cbbd')); // 'bb'