// >> * 12 * 10 * 
// >> 8 * 6 *
// >> 4 * 2
// >> * 0
// >> *

function pattern(n , num){
    for (let i = 0 ; i <= n; i++ ){
        let star = ""
        for(let j = n - i; j > 0 ; j-- ){
            if (num %2!== 0){
                star += " " + "*"
            }     else {
                star += " " + num
            }
            num--
        }   
        console.log(star);
             
    }

}

console.log(pattern(5,13));
