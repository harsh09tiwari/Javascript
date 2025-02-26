const accountId =  12345
let accountEmail = "harsh@gmail.com"
var accountPassword = "4321"
accoutCity = "Gorakhpur"
let accountState;

// accountId = 2  // not allowed because it is constant

accountEmail = "shivam@gmail.com"
accountPassword = "1234"
accountCity = "Padrauna"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functions
*/

// for printing multiple values

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])