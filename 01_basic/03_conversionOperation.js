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
/*
let isLoggedIn=1
let booleanisLoggedin=Boolean(isLoggedIn);
console.log( typeof booleanisLoggedin);
console.log(booleanisLoggedin);
*/

//Chnge the value into negative
/*
let value=5;
let negnum=-value;
console.log(negnum);
*/


let str1="Hello";
let str2=" Aarti";
//console.log(str1+str2);
let str3= str1+str2;
console.log(str3);

console.log(4+"2"+3);
console.log(((4+2)-3)*2);               // in this case Use parenthesis 
