// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function findFirtOcc(haystack, needle) {
    for(let i = 0 ; i<= (haystack.length+1 - needle.length) ; i++){
        if (haystack.substr(i , needle.length) === needle ) return i ;
    }
    return -1;
}

console.log(findFirtOcc("hello", "ll"));
// console.log();

