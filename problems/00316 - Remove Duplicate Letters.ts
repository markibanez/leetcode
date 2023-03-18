// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Example 1:
// Input: s = "bcabc"
// Output: "abc"

// Example 2:
// Input: s = "cbacdcbc"
// Output: "acdb"

// Constraints:
// 1 <= s.length <= 10^4
// s consists of lowercase English letters.

function removeDuplicateLetters(s: string): string {
  let result = '';
  let lastOccurrence = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    lastOccurrence.set(s[i], i);
  }
  let visited = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    if (visited.has(s[i])) {
      continue;
    }
    while (s[i] < result[result.length - 1] && i < lastOccurrence.get(result[result.length - 1])!) {
      visited.delete(result[result.length - 1]);
      result = result.slice(0, result.length - 1);
    }
    result += s[i];
    visited.add(s[i]);
  }
  return result;
}

// test cases
console.log(removeDuplicateLetters('bcabc')); // 'abc'
console.log(removeDuplicateLetters('cbacdcbc')); // 'acdb'