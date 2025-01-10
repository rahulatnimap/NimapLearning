


// async function printingNumbers() {

//     for (let i = 1; i <= 10; i++) {
//         Promise((resolve, reject) => {
//             setTimeout((i) => {
//                 console.log(i);
//                 resolve();
//             }, 1000)
//         })
//     }

// }





let arr = [1,1,1,2,3,5,7,7,4]


let obj = {}
// return console.log(true);


// const arr = [1,1,2,3,5,7,7,4]??

for (let i = 0 ; i<= arr.length - 1 ; i++ ){
    if (!obj[arr[i]]) {
        obj[arr[i]] = 1
    } else if ( obj[arr[i]] < 2) {
        obj[arr[i]]++
    }else return console.log(false);
    
}

console.log(obj);
