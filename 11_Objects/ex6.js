const car = { brand: "Toyota", model: "Corolla" };
// Add 'year'
// Update 'model'
// Delete 'brand'


car["year"] = 2020
car["model"] = "cruser"
// car["brand"] = ''

// console.log(car);
let newcar = {}

for (let i in car) {
    console.log(i);
    
    if ( i !== "brand") newcar[i] = car[i] 
     
}

console.log(newcar);
