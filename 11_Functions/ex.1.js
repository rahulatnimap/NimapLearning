function sum(...arg){
    if(Array.isArray(arg[0])) return arg[0].reduce((a,b) => a+b)
        else
    return arg.reduce((a,b) => a+b)
}

console.log(sum([1,2,3,4]));
