var romanToInt = function(s) {
    const relation = {
        "I" : 1 ,
        "V" : 5 ,
        "X" : 10 ,
        "L" : 50 ,
        "C" : 100 ,
        "D" : 500 ,
        "M" : 1000 
    }
    let val = 0
     for (let i = 1 ; i<= s.length ; i++){
        if (relation[s[i-1]] < relation[s[i]]){
            val -= relation[s[i-1]]
        } else val += relation[s[i-1]]
     }
     return val
    }
     

   console.log(romanToInt("XI"));
   