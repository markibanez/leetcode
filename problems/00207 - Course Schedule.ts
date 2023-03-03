// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = new Map();
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
    }
    for (let [course, preReq] of prerequisites) {
        graph.get(course).push(preReq);
    }

    const visited = new Set();
    const visiting = new Set();
    const hasCycle = (course: number): boolean => {
        if (visited.has(course)) return false;
        if (visiting.has(course)) return true;
        visiting.add(course);
        for (let preReq of graph.get(course)) {
            if (hasCycle(preReq)) return true;
        }
        visiting.delete(course);
        visited.add(course);
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }
    return true;
};

// test cases
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false