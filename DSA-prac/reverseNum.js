function revNum(num){
    let s = 1;
    let e = 4;
    let str = ""
        while (e >= num.length){
            for (let i = e ; i >= s ; i--){
                str+= i
            }
            s = str.length
            e = str.length + 4 
  console.log(str);

        }
     

    }


console.log(revNum("1234567891"));
