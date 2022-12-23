// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

function letterCombinations(digits: string): string[] {
    let combinations: string[] = [];
    if (digits.length === 0) {
        return combinations;
    }
    let letters: { [key: string]: string[] } = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };
    function backtrack(combination: string, nextDigits: string) {
        if (nextDigits.length === 0) {
            combinations.push(combination);
        } else {
            let digit = nextDigits.substring(0, 1);
            let letters2 = letters[digit];
            for (let i = 0; i < letters2.length; i++) {
                let letter = letters2[i];
                backtrack(combination + letter, nextDigits.substring(1));
            }
        }
    }
    backtrack("", digits);
    return combinations;
};

// test cases
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a","b","c"]