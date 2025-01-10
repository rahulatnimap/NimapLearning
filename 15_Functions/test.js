
let name1 = "name1"
 
 

const obj = {
    name : "name",
    logName : () => {
       console.log(this.name);
    },
    logname (){
        
        console.log(this.name);
    }
}

obj.logName();
console.log(obj.name);
obj.logname();
