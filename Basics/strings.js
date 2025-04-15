const name = "Nish";
const age = 21;

// console.log(name + age + " age");

// console.log(`Hello my name is ${name} and my age is ${age}.`) // Modern way of string interpolation like f-strings in python

const game = new String("Ayanokoji");

// console.log(game.__proto__)
// console.log(game.length)
// console.log(game.toUpperCase())
// console.log(game.charAt(5))
// console.log(game.indexOf('o'))

const Newstring = game.substring(0,5) // Cannot do negative indexing and if first number is greater than second than it swaps them automatically
// console.log(Newstring)

const anotherString = game.slice(-4,10) // Can use negative based indexing also
// console.log(anotherString)

const newStringOne = "   Nish   ";
// console.log(newStringOne.trimStart()) // trim from start
// console.log(newStringOne.trimEnd()) // trim from end
// console.log(newStringOne.trim()) // trim for both start and end

const url = "https://ayanokoji%21kiyotaka.com"
// console.log(url.replace("%21", "-")) // Replaces something with something

// console.log(url.includes('ayanokoji'))
// console.log(url.includes('nish'))