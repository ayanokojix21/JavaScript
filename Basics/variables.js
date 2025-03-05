const accountId = 1234;
let accountEmail = "ayano21@gmail.com";
var accountPassword = "ayanoKoji21";
accountCity = "Mumbai"; // This is also a way of declaring variable in javascript without declaring any keyword, but not recommended at all
let accountState; 

// accountId = 4321;

accountEmail = "kiyotaka21@gmail.com";
accountPassword = "kiyotaka21";
accountCity = "Bengaluru";

/*
Prefer not to use var 
Because of issue in block scope and functional scope
*/

// accountState is undefined because it is declared by don't contain any value

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])