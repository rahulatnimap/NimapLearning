
 const three = new Promise((res , rej) => {
    setTimeout(()=>{
       res(3)
    },4000)
 })

 const twn = new Promise((res , rej) => {
    setTimeout(()=>{
       res(5)
    },10000)
 })

const handleAwait = async () => {

    console.log(1);
    console.log(2);
    const threeval = await three
    console.log(threeval);
    console.log(4);   
    console.log(6);
    
    
}

async function test(){
    console.log("test");
    const tens = await twn
    console.log(tens);
}
function test2(){
    console.log("test2");
     
}
handleAwait()
test()
test2()
