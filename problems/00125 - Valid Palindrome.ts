// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 10^5
// s consists only of printable ASCII characters.

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    function isAlphaNumeric(c: string) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
    };

    while (i < j) {
        while (i < j && !isAlphaNumeric(s[i])) i++;
        while (i < j && !isAlphaNumeric(s[j])) j--;
        if (i < j && s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++;
        j--;
    }
    return true;
};

// test cases
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true