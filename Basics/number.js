const score = 400 // Primitive type declartion of number
// console.log(score)

const age = new Number(21) // Object type declaration of number
// console.log(age)

// console.log(age.toString()) // Converts Number to Strings
// console.log(age.toFixed(2)) // Number of Decimal Places after Decimal

const otherNum = 21.4588
// console.log(otherNum.toPrecision(4)) // Returns in String and length of number is 4 

const hundreds = 100000000;
// console.log(hundreds.toLocaleString()) // Indian Number System
// console.log(hundreds.toLocaleString('en-US')) // US Number System

// console.log(Math.random()) // Gives random Number between 0 and 1
// console.log(Math.random() * 10) // Gives random Number between 1 and 10
// console.log(Math.floor(Math.random() * 10) + 1) // Floor can make min number 0 so adding 1 to make number between 0 and 10

const min = 10
const max = 21

// console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Make number between min and max number