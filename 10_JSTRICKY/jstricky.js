// // console.log(0.1*3==0.3);


// //  for(var i=0; i<10; i++){ 
// //     setTimeout(()=>{ console.log(i)},1000) }


// //     // console.log([2] === [2])  // false

// //     test();
// // function test() { 
// //     return true 
// // }   

// //Q1 prac

// // function timeout(){
// //     let a = 1
// //    while(a<=10){
// //     setTimeout(()=>{
// //         console.log(a);
// //     },a *1000)
// //     a++
// //    }
// // }

// // timeout()

// // function outer(){
// //     var a = 2;
// //     function inner(){
// //         a++
// //         console.log(a);
// //         var a = 10;
// //     }
// //     inner()
// // }
// // outer()

// // (function () { 
// //     try { 
// //         throw new Error(); 
// //     } catch (x) { 
// //         var x = 1, y = 2; 
// //         console.log(x);  
// //     } 
// //     console.log(x);      
// //     console.log(y);     
// // })();


// // console.log(true + 1)  //2


// // Promise.resolve(3)
// //     .then((res) => {return res+2})
// //     .catch()
// //     .then(res => {
// //         console.log(res)})
// //     .then()
// //     .then()
// //     .catch()
// //     .then((res) => { console.log(res) })  

// let a = "red"
// let  b = "purple"

// let temp = a 
// a = b 
// b = temp

// console.log(a , b);

// let num1 = 10;
// let num2 = 11;

// console.log(Math.max(num1, num2));

// console.log(isLandscape(10, 50));
// fizzbuzz(30)


// function isLandscape(width, height) {
//     return width > height
// }

// function fizzbuzz(num) {
//     if (num % 3 == 0 && num % 5 == 0) console.log("fizzBuzz");
//     else if (num % 5 == 0) console.log("buzz");
//     else if (num % 3 == 0) console.log("fizz");
//     else console.log(false);
// }

// console.log(speedCheck(180));


// function speedCheck(speed) {
//     var points = Math.floor((speed - 70) / 5);


//     if (speed <= 70) {
//         return "ok"
//     }
//     else if (speed > 70) {
//         if (points >= 12) return "suspended"
//         else return "points : " + points
//     }

// }

// const arr = [1, 2, 3, 4, null, undefined, 0, 0]
// let count = 0

// for (let i in arr) {
//     if (arr[i] == null || arr[i] == undefined || arr[i] == 0 || arr[i] == false || arr[i] == ' ' || arr[i] == NaN) count++;
//     console.log(count);
    
// }

// printStars(5)


// function printStars(rows){
//     for (let i = 1 ; i <= rows ; i++){
//         let stars = '';
//          for(let j = 0; j < i; j++){
//             stars=+ '*'
//          console.log(stars);

//          } 
         
//     }
// }

//-----------------------------------------6

// console.log("start"); //1

// setTimeout(()=>{
//     console.log("time out");   //3
// },0);

//  Promise.resolve().then(() => console.log("res")) //4

// console.log("End"); //2

/////////////////////////////////////////

// function outer() {
//     let count = 0
//     return function inner() {
//         count++;
//         console.log(count);
        
//     }
//     inner(); 
//     console.log(count);
// }
 

// const res = outer();

// res()
// res()


/////////////////////////////////////////

// var x = 10 ;

// function inc(x){
// x++;
// return x
// }

// const res = inc(x)
// console.log(x);

/////////////////////////////////////////

function closex(){
    let x = 0; // New `x` is created every time `example()` is called
x++
    console.log(x);
}
closex();
closex();