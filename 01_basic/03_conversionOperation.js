let score="33"       //we can put here null,undefined to check the conversion
console.log(score);
console.log(typeof (score));   // change the string og score variable to Number

/*
let valueinNumber= Number(score);
console.log( typeof valueinNumber);
console.log(valueinNumber);
*/


// if we convert it into number then we get
// "33"-33       
// "33sdcc"--NaN
// true-1;  false-0
// Conversion in boolean
let isLoggedIn=1
let booleanisLoggedin=Boolean(isLoggedIn);
console.log( typeof booleanisLoggedin);
console.log(booleanisLoggedin);