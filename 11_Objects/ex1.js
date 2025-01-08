// street , city , zipcode , showAddress(add) key and value

const Address = {
    street : "5th avenu",
    city : "newyork",
    Zipcode : 421202
}

function showAddress(Address){
    for (let key in  Address){
        console.log(`${key}  : ${Address[key]}`);
        
    }
}

showAddress(Address)