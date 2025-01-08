function arrayFromRange(min , max) {
    let arr =  []
    for (let i = min ; i <= max ; i++){
        arr.push(i)
    }
    return arr
}

const newarr = arrayFromRange(1,4);
console.log(newarr);
