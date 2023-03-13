// Convert a non-negative integer num to its English words representation.

// Example 1:
// Input: num = 123
// Output: "One Hundred Twenty Three"

// Example 2:
// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

// Example 3:
// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// Constraints:
// 0 <= num <= 2^31 - 1

function numberToWords(num: number): string {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands = ['', 'Thousand', 'Million', 'Billion'];
    let result = '';
    let i = 0;
    while (num > 0) {
        let n = num % 1000;
        if (n > 0) {
            result = helper(n) + thousands[i] + ' ' + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    return result.trim() || 'Zero';
    function helper(n: number): string {
        if (n === 0) {
            return '';
        }
        if (n < 20) {
            return units[n] + ' ';
        }
        if (n < 100) {
            return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
        }
        return units[Math.floor(n / 100)] + ' Hundred ' + helper(n % 100);
    }
};

// test cases
console.log(numberToWords(123)); // "One Hundred Twenty Three"
console.log(numberToWords(12345)); // "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567)); // "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"