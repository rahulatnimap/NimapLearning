const arr = [1,2,1,1,2,3,4]

function countOcc(arr, target){
    let count = 0
    for (let i = 0 ; i <= arr.length - 1 ; i++) {
         if(arr[i] === target) count++
    }
    console.log(count);
}

countOcc(arr , 1)

// reduce fun 

function countOCCC(arr, target) {
     return arr.reduce((acc,cur) => {
          {if(cur == target)acc++
     } return acc  } 
     , 0)
}

console.log(countOCCC(arr,1));
