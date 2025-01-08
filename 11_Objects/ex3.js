function createAdd(street , city , Zipcode){
    this.street = street ,
     this.city = city,
     this.Zipcode = Zipcode
}

const newA = new createAdd("6th avenu" , "dombivali" , 421202)
const newB = new createAdd("6th avenu" , "kalyan" , 421202)



for (let i  in newA){
     if (newA[i] === newB[i]) console.log(true);
     else return console.log(false); 
}