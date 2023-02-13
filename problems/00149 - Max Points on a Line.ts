// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// Example 1:
// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3

// Example 2:
// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4

// Constraints:
// 1 <= points.length <= 300
// points[i].length == 2
// -10^4 <= xi, yi <= 10^4
// All the points are unique.

function maxPoints(points: number[][]): number {
    const getSlope = (p1: number[], p2: number[]) => {
        if (p1[0] === p2[0]) {
            return Infinity;
        }
        return (p1[1] - p2[1]) / (p1[0] - p2[0]);
    };

    let max = 0;
    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        let same = 1;
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                same++;
            } else {
                let slope = getSlope(points[i], points[j]);
                map.set(slope, (map.get(slope) || 0) + 1);
            }
        }
        max = Math.max(max, same);
        for (let value of map.values()) {
            max = Math.max(max, value + same);
        }
    }
    return max;
};

// test cases
console.log(maxPoints([[1,1],[2,2],[3,3]])); // 3
console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])); // 4