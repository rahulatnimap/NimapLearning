function expensObject (numberofdollar , dishname , ratings , status , time , tags){
  return {  numberofdollar ,
     dishname ,
      ratings ,
       status ,
        time ,
         tags}
}

const newexp = new  expensObject("$$" , "Hubien resturant" , 850 , "closed" , 5, ["chinese" , "casual" , "classy"]) 

console.log(newexp);
