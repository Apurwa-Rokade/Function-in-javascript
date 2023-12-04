// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.


function factorial(){
    let factorial =1;

    if(num>=0){
for(let i=1;i<=num;i++)
{
factorial *=i;

}
    }
    else{
        return "Invalide output"
    }
return factorial;
}
let num =0
let fact = factorial(num)
console.log(fact);