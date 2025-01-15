// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// function LongestPrefix(arr) {
//     let obj = {}
//     let max = 0

//     for (let i = 0; i <= arr.length; i++) {
//         for (let j in arr[i]) {
//             if (obj[arr[i][j]]) {
//                 obj[arr[i][j]]++
//                 max = Math.max(max, obj[arr[i][j]])


//             } else {
//                 obj[arr[i][j]] = 1
//             }
//             // console.log(obj[arr[i][j]]);
//         }

//     }

// }

function LongestPrefix(arr) {
    const sorterdArr = arr.sort();
    let s1 = sorterdArr[0]
    let s2 = sorterdArr[sorterdArr.length - 1]
    let res = ""
    for (let i in s1) {
        if (s1[i] !== s2[i]) {
            return res
        } else {
            res += s1[i]
        }
    }

    return res
}

console.log(LongestPrefix(["flower", "flow", "flight"]));
