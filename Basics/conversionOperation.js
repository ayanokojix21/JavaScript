let score = "21nish";
// let score = "nish";
// let score = null;
// let score = undefined;
// let score = true;

// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "21" => 21
// "21nish" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 0;
// let isLoggedIn = 1;
// let isLoggedIn = "";
// let isLoggedIn = "nish";

let Bool = Boolean(isLoggedIn);

// console.log(Bool);

// 0 => false; 1 => true;
// "" => false; 
// "nish" => true;

let num = 21;

let stringNum = String(num);
// console.log(typeof(stringNum));
// console.log(stringNum);

let newString = stringNum + 21;
// console.log(newString);
// num has been converted to string as "21" + 21 => 2121

// ************************************** Operations ***************************************

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122 left to right so "1" + 2 => "12" then "12" + 2 => "122"
// console.log(1 + 2 + "2"); // 32 left to right so 1 + 2 => 3 then 3 + "2" => "32"

// Tricky code

// console.log(+true); // gives 1 converts bool true => 1
// console.log(+""); // gives 0 converts bool false => 0

// Operations like == behaves differently then >=,>,<,<= , comparision operation converts null to 0.

// console.log(null>0); // 0 > 0 false
// console.log(null==0); // null == 0 false
// console.log(null>=0); // 0 >= 0 true

// console.log(undefined>0); // undefined > 0 false
// console.log(undefined==0); // undefined == 0 false
// console.log(undefined>=0); // undefined >= 0 false

console.log("2" == 2) // true as only check value not datatype
console.log("2" === 2) // false as also check datatype along with values