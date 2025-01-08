const arr = [1,2,3,4,5]

function includes(arr, searchElement){
    for (let i = 0 ; i <= arr.length - 1 ; i++){
        if (arr[i] === searchElement) return true
         
    }
    return false
}

const test = includes(arr , 51);

console.log(test);
