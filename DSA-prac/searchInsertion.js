// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

const arr = [1, 3, 5, 6]
const target = 0

function insertionSearch(arr, target) {
    let s = 0;
    let e = arr.length;
    let m = 0;
    while (s <= e) {
        if (target === 0) return 0;
        m = Math.floor( s +  (e - s) / 2);
        if (arr[m] === target) return m;
        if (arr[m] > arr[s]) {
            e = m - 1;
        } else {
            s = m + 1;
        }
    }
    return Math.abs(arr[m] - target)
}
console.log(insertionSearch(arr, target));
