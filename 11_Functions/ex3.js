function countOCCC(arr, target) {
    if (!Array.isArray(arr)) throw new Error("arr is Not an array")
    return arr.reduce((acc, cur) => {
        {
            if (cur == target) acc++
        } return acc
    }
        , 0)
}


let arr = null

try {
    // const arr = [1,2,1,1,2,3,4]
    const res = countOCCC(arr, 1)
    console.log(res);

} catch (error) {
    console.log(error.message);

}