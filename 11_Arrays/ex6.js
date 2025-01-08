const arr = [1,2,4,5,5,6,6,12,3,4,,251,45,3]

let max = 0 
for (let i = 0 ; i <= arr.length- 1 ; i++){
      if (arr[i] > max ){
        max = arr[i]
      }
}
console.log(max);


