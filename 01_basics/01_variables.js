const accountId = 1445532
let accountEmail = "nimishapandey2023@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "abc@hu.com"
accountPassword ="12567"
accountCity = "delhi"


console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var
bcz of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])