// Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
// immediately displays the result.

// (function square(num){
// let result = num*num
// console.log (result)
// }

//     )(34);

(function (){
function square(num){
    let result =num*num
    return result
}
let num =4;
let output = square(num);
console.log(output);
})();