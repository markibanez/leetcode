// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// Example 1:
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Example 2:
// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.

// Example 3:
// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

// Constraints:
// 1 <= words.length <= 300
// 1 <= words[i].length <= 20
// words[i] consists of only English letters and symbols.
// 1 <= maxWidth <= 100
// words[i].length <= maxWidth

function fullJustify(words: string[], maxWidth: number): string[] {
    let res = [];
    let line = [];
    let lineLength = 0;
    for (let word of words) {
        if (lineLength + word.length + line.length > maxWidth) {
            res.push(justifyLine(line, lineLength, maxWidth));
            line = [];
            lineLength = 0;
        }
        line.push(word);
        lineLength += word.length;
    }
    res.push(justifyLine(line, lineLength, maxWidth, true));
    return res;
};

function justifyLine(line: string[], lineLength: number, maxWidth: number, isLastLine: boolean = false): string {
    let res = '';
    if (isLastLine) {
        res = line.join(' ');
        res += ' '.repeat(maxWidth - res.length);
        return res;
    } else {
        let spaces = maxWidth - lineLength;
        let spacesPerWord = Math.floor(spaces / (line.length - 1));
        let extraSpaces = spaces % (line.length - 1);
        for (let i = 0; i < line.length; i++) {
            res += line[i];
            if (i < line.length - 1) {
                res += ' '.repeat(spacesPerWord + (i < extraSpaces ? 1 : 0));
            }
        }

        if (res.length < maxWidth) res += ' '.repeat(maxWidth - res.length);

        return res;
    }
};

// test cases
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
// ["This    is    an",
//  "example  of text",
//  "justification.  "]

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
// ["What   must   be",
//  "acknowledgment  ",
//  "shall be        "]

console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
// ["Science  is  what we",
//  "understand      well",
//  "enough to explain to",
//  "a  computer.  Art is",
//  "everything  else  we",
//  "do                  "]