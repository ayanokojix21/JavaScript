"use strict"; // treats all js code as new version of js

// alert(4+4) // we are using node.js not browser so it won't work

// code readability should be a priority while coding

let name = "Nishchal"; // string
let age = 18; // number
let isLoggedIn = false; // boolean

/* Datatypes

number => -2^53 to 2^53
bigint => for big numbers
string => ""
boolean => true/false
null => standalone value
undefined => variable is defined but value have not been given to it 
symbol => unique

object
*/

console.log(typeof null); // object
console.log(typeof undefined); // undefined

// **************************************************** Datatype Summary **************************************************

// Primitive : Call by value

// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt
// JavaScript is dynamically typed language i.e the type of variables are determined at run-time you don't need to specify it at the time of coding

// Non-Primitive : Call by Reference

// Arrays, Objects, Functions,

// --------------------------------------------------- Memory Allocation --------------------------------------------------------

// Stack (Primitive) 

let company = "google";
let newCompany = company;
newCompany = "microsoft";

console.table([company,newCompany]);

// It only gives the copy of originial variable so change in one won't change the original variable

// Heap (Non-Primitive)

let MyObj = {
    name:"nish",
    age:18
}

let newObj = MyObj;
newObj.age = 21;

console.table([MyObj.age,newObj.age])

// It gives the reference of original value so change in one change the original value 