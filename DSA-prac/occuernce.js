var areOccurrencesEqual = function (s) {
    const obj = {}
    let max = 0
    for (let char of s) {
        if (!obj[char]) {
            obj[char] = 1

        } else {
            obj[char]++
        }
        max = Math.max(max , obj[char])
    }

    for (let key in obj) {
        if (obj[key] != max) return false ;
    }

    return true;


}
 


console.log(areOccurrencesEqual("vvvv"));
