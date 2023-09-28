const name="aarti"
const accountid=12;


//console.log(name + accountid+"hiiii");                --not good way
        // --We can declare string by this format
        // in placeholdder we can directly inject the variables
        //   String is obect and key value pairs

console.log(`Hello its me ${name} and my accountid is ${accountid}`);

const gameName=new String("aarti");

// key value pairs access
console.log(gameName[3]);
console.log(gameName.toUpperCase());           //[[Prototype]]: String
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));




                 //           --Slice the gameName
    
     


     const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));