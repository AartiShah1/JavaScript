const accountId=1
let accountEmail="aarti@gmail.com"
var accountpassword="12345"
accountcity="Jaipur"

// accountId=5                //not allowed in const

// Prefer not to use var because of issue in block scope and functional scope

accountEmail="rani@gmail.com"
accountpassword="556"
accountcity="Nepal"
console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountcity])