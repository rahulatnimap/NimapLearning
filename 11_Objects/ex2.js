
// Factory Function

function createAddress(street , city , Zipcode){
    return {
        street,
        city,
        Zipcode
    }
}

const newAdd = new createAddress("6th avenu" , "dombivali" , 421202)

console.log(newAdd);


// Constructor

function createAdd(street , city , Zipcode){
    this.street = street ,
     this.city = city,
     this.Zipcode = Zipcode
}

const newA = new createAdd("6th avenu" , "dombivali" , 421202)

console.log(newA);
