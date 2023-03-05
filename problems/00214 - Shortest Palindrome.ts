// You are given a string s. You can convert s to a palindrome by adding characters in front of it.
// Return the shortest palindrome you can find by performing this transformation.

// Example 1:
// Input: s = "aacecaaa"
// Output: "aaacecaaa"

// Example 2:
// Input: s = "abcd"
// Output: "dcbabcd"

// Constraints:
// 0 <= s.length <= 5 * 10^4
// s consists of lowercase English letters only.

function shortestPalindrome(s: string): string {
    const rev = s.split('').reverse().join('');
    const l = s.length;
    for (let i = 0; i < l; i++) {
        if (s.substring(0, l - i) === rev.substring(i)) {
            return rev.substring(0, i) + s;
        }
    }
    return '';
};

// test cases
console.log(shortestPalindrome('aacecaaa')); // aaacecaaa
console.log(shortestPalindrome('abcd')); // dcbabcd