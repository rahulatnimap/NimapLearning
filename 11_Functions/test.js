const cars = {
    brand : "toyota",
    brandcall(){
        console.log(this.brand);
    },
    changeBrand(change){
      this.brand =  change
    }
}

cars.changeBrand("BMW")
cars.brandcall();
console.log(cars);


