
// async function fetchData() {
//     console.log("Fetching...");
//     const data = await "Data is here!";
//     console.log(data);
// }
// fetchData();
// console.log("End");

// const promise = new Promise((resolve) => resolve(5));

// promise
//     .then((val) => val * 2)
//     .then((val) => { console.log("Intermediate:", val); }) // Missing return
//     .then((val) => console.log("Final:", val));

// async function fetchData() {
//     throw "Error occurred!";
// }

// fetchData().then(console.log).catch(console.log);

// const p1 = Promise.resolve("Resolved!");
// const p2 = new Promise((_, reject) => setTimeout(() => reject("Rejected!"), 500));
// const p3 = Promise.resolve("Also Resolved!");

// Promise.all([p1, p2, p3])
//     .then((results) => console.log("All Results:", results))
//     .catch((error) => console.log("Error:", error));


// const nested = Promise.resolve(
//     new Promise((resolve) => setTimeout(() => resolve("Inner resolved!"), 500))
// );

// nested.then(console.log);

// const p1 = Promise.reject("Fail 1");
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Success!"), 1000));
// const p3 = Promise.resolve("Fail 2");

// Promise.allSettled([p1, p2, p3])
//     .then((result) => console.log("First Fulfilled:", result))
//     .catch((error) => console.log("All Rejected:", error));

// const fetchData = () => {
//     return Promise.resolve("Data fetched!");
// };

// fetchData()
//     .then((data) => {
//         console.log(data);
//        return  new Promise((resolve) => resolve("More data"));
//     })
//     .then((moreData) => console.log(moreData));

// const fetchData = () => {
//     return Promise.reject("Error fetching data!");
// };

// fetchData().then((data) => {
//     console.log(data);
// }).then(() => {
//     console.log("Completed!");
// }).catch((err)=>{
//     console.log(err)  // added missing catch block for error handling 
// })

// function fetchData(callback) {
//      setTimeout(() => callback("Data fetched!"), 1000);
// }

// const fetchAsPromise = () => {
//    return  fetchData((data) => {
//         return data;
//     });
// };

// fetchAsPromise().then(console.log(fetchData(callback)));

// const fetchData = () => {
//     return new Promise((resolve) => {
//         resolve("Done");
//     });
// };

// fetchData().then((res)=> console.log(res));

// async function fetchData() {
//     const data = await Promise.resolve("Data fetched!");
//     console.log(data);
// }
// fetchData();


// async function fetchData() {
//     const res =  await fetchData(); // Recursive call
//     console.log(res);
// }

// fetchData().then(console.log).catch(console.error);


// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise(res => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));
// console.log(5);

// Current Output: 2 3 5 4 1
// Desired Output: 1 2 3 4 5

(async function prom() {
    const res = await  new Promise((res)=>setTimeout(()=> res(1),0))
    console.log(res);
console.log(2);
  await new Promise(res => {
      res(3)
    }).then((res) => console.log(res));
    console.log(4)

console.log(5);    
})();

// async function main() {
//     return  await prom();
// }

// main()

// setTimeout(() => console.log('A'), 100);
// setTimeout(() => console.log('B'), 50);
// console.log('C');
// new Promise(res => {
//   console.log('D');
//   res();
// }).then(() => console.log('E'));
// console.log('F');

// Current Output: C D F E B A
// Desired Output: A B C D E F


// async function corrOrder() {
//     await new Promise((res) => setTimeout(() => {console.log('A');  res();} ,  100))
//     await new Promise((res) => setTimeout(() => {console.log('B');  res();} ,  50))
    
//     console.log('C');
//     await new Promise((res) => res('D')).then((res) => console.log(res));
//     console.log('E');
//     console.log('F');

// }

// console.log(corrOrder());


// setTimeout(() => console.log(100), 200);
// console.log(200);
// Promise.resolve().then(() => console.log(300));
// setTimeout(() => console.log(400), 100);
// console.log(500);

// // Current Output: 200 500 300 400 100
// // Desired Output: 100 200 300 400 500
