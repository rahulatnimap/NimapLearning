const obj = {
    radius: 0,
    get area() {
        console.log(3.14 * (this.radius * this.radius));
    }
}

obj.radius = 10;

obj.area