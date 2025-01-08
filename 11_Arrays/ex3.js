const arr = [1,2,3,4]

function except(arr , arr2){
    let res = []
     for (let i = 0 ; i <= arr.length - 1 ; i++){
        if (arr[i] !== arr2[i]) res.push(arr[i])
     }
    console.log(res);
    
}

except(arr , [1,2])