const arr = [1,2,3,4,5]

function moveelemnt(arr , position , change){
    let output = []
    let temp = arr[position];
   if ((position+change) <= arr.length && (position+change) >= 0){
    arr[position] = arr[position + change];
    arr[position + change] = temp;
    output = [...arr]
    console.log(output);
   } else console.log("error");
   
    
}

moveelemnt(arr , 2 , -1)