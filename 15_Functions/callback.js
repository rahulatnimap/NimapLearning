function inputs(logg)
{

  let result = 2 + 4 ;
  console.log(result);
  logg("rahulatnimap" , 123)
  return result


}

function logg(username , password){
    
    if(password === pass){
        console.log(`Welcome ${username} you are logged in`);
    }  
}
let pass = 123
console.log(inputs(logg));





function outerr (){
    let count = 0;
    function inner(){
        return count++
         
    }
    // inner() 
    return inner
}

const outer = outerr()


console.log(outer());
console.log(outer());
console.log(outer());
console.log(outer());
console.log(outer());




// setTimeout(() => {
//     console.log("Task 1");
//     setTimeout(() => {
//       console.log("Task 2");
//       setTimeout(() => {
//         console.log("Task 3");
//         setTimeout(() => {
//           console.log("Task 4");
//         }, 4000);
//       }, 3000);
//     }, 2000);
//   }, 1000);
  

console.log(console.log());


