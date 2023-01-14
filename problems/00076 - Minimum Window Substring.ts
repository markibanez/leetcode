// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:
// m == s.length
// n == t.length
// 1 <= m, n <= 10^5
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

function minWindow(s: string, t: string): string {
    let tMap = new Map();
    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        } else {
            tMap.set(t[i], 1);
        }
    }
    let sMap = new Map();
    let left = 0;
    let right = 0;
    let min = Infinity;
    let minLeft = 0;
    let minRight = 0;
    while (right < s.length) {
        if (tMap.has(s[right])) {
            if (sMap.has(s[right])) {
                sMap.set(s[right], sMap.get(s[right]) + 1);
            } else {
                sMap.set(s[right], 1);
            }
            while (left <= right && isSubString(sMap, tMap)) {
                if (right - left + 1 < min) {
                    min = right - left + 1;
                    minLeft = left;
                    minRight = right;
                }
                if (sMap.has(s[left])) {
                    sMap.set(s[left], sMap.get(s[left]) - 1);
                }
                left++;
            }
        }
        right++;
    }
    return min === Infinity ? "" : s.substring(minLeft, minRight + 1);
};

function isSubString(sMap: Map<string, number>, tMap: Map<string, number>): boolean {
    for (let [key, value] of tMap) {
        // @ts-ignore
        if (!sMap.has(key) || sMap.get(key) < value) {
            return false;
        }
    }
    return true;
}

// test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""