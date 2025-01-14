// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestPrifix(arr) {
    let pre = ""
    for (let i in arr) {
        for (let j in arr[i]) {
            if (pre.length <= 0 ){
               pre = arr[i]
            }
            if(pre[j] === )
        }
    }
}

console.log(longestPrifix(["flower", "flow", "flight"]));
