// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all 
// arguments.Test the curry function with a function that adds two numbers.


function curry (func)
{
   return function curried (...args){
    if(func.length <= args.length){
      return func(...args)
    }
    else return function(...nextargs)
    {return curried(...args,...nextargs);}
   }
}

function add(a,b){
   let result = a+b;
   return result;
}

let curriedadd = curry(add);
console.log(curriedadd(6)(5));
