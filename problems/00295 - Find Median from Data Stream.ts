// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10^-5 of the actual answer will be accepted.

// Example 1:
// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// Constraints:
// -10^5 <= num <= 10^5
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 10^4 calls will be made to addNum and findMedian.

// Follow up:
// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

class MedianFinder {
    private stream: number[];

    constructor() {
        this.stream = [];
    }

    private findInsertIndex(num: number): number {
        let left = 0;
        let right = this.stream.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (this.stream[mid] === num) {
                return mid;
            } else if (this.stream[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    addNum(num: number): null {
        const insertIndex = this.findInsertIndex(num);
        this.stream.splice(insertIndex, 0, num);
        return null;
    }

    findMedian(): number {
        const len = this.stream.length;
        if (len % 2 === 0) {
            return (this.stream[len / 2 - 1] + this.stream[len / 2]) / 2;
        } else {
            return this.stream[(len - 1) / 2];
        }
    }
}

// test cases
const medianFinder = new MedianFinder();
console.log(medianFinder.addNum(1)); // null
console.log(medianFinder.addNum(2)); // null
console.log(medianFinder.findMedian()); // 1.5
console.log(medianFinder.addNum(3)); // null
console.log(medianFinder.findMedian()); // 2.0