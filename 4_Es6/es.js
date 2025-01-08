// // const [a , , , b] = [1,2,3,4] 
// const [a , b , ...{pop , push}] = [1,2,3,4] 
// const [c, ...d] = [1,2,3,4] 

// // console.log(b);


// let num1 = 1 ;
// let num2 = 3;

// [num1 , num2 ] = [num2 , num1]

// console.log(num2);


// Enhanced object

// function newObj(name , age , salary , experience , tech){
//     return  {name,age,experience,salary,experience,tech}
// }


// console.log(employee.salary);

// async function printSynch(){
//     console.log(1);

//     await new Promise(resolve => setTimeout(() => {
//         console.log(2);
//         resolve()
//     },1000))
//     console.log(3);

// }


// printSynch()

// class react {
//     #height = 10;

//     constructor (height){
//         this.#height = height
//     }
//     printheight(){
//         return this.#height;
//     }

// }

// const newinstance = new react(20);

// const val = newinstance.printheight()

// console.log(val);


class cars {
    constructor(type, speed) {
        this.speed = speed,
            this.type = type
    }

    printType(){
        return `${this.type} is a car`
    }
}

class race extends cars {
    constructor(type , average, speed) {
        super(type , speed);
        this.average = average;
    }

    pintRacecar() {
        return `${this.type} is a race car and has average of ${this.average} km/hr but its top speed is ${this.speed}`;

    }
}

const ferrari = new race("ferrari", 200 , 2)

console.log(ferrari.printType());
