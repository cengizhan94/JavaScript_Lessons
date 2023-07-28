//Logical Operators

//&& amplersand operator example
// const check = 4 > 3 && 10 > 5 //true && true -> true
// const check = 4 > 3 && 10 < 5 //true && false -> false
// const check = 4 < 3 && 10 < 5 // false && false -> false

// || pipe or operator, example

// const check = 4 > 3 || 10 > 5 // true || true -> true
// const check2 = 4 > 3 || 10 < 5 // true || false -> true
// const check3 = 4 < 3 || 10 < 5 // false || false -> false

//! Negation examples

/* let check4  = 4 > 3 //true
let check5 = !(4 > 3) //false

let isLightOn = true
let isLightOff = !isLightOn //false
let isMarried = !false //true */

// Increment Operator
//Pre-increment
/* let count = 0
console.log(++count)
console.log(count)
// Post-ncrement
let count2 = 0
console.log(count2++)
console.log(count2) */

// Decrement Operator
// Pre-decrement

/* let count3 = 0
console.log(--count)
console.log(count)

// post-decrement
let count4 = 0
console.log(count--)
console.log(count)*/

//Ternary Operators


/* let isRaining = true
isRaining
    ? console.log("You need a rain coat")
    : console.log("No need for a rain coat")


isRaining = false
isRaining
    ? console.log("You need a rain coat")
    : console.log("No need for a rain coat")

let number = 5
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)

number = -5

number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`) */

// Window Methods

//Window alert() method -> alert(message)

// alert("Hello World!")

//Window prompt() method
/* prompt('required text', 'number goes here')
let number = prompt('Enter number', 'number goes here')
console.log(number) */

// Window confirm() method
/* const agree = confirm("Are you sure like to delete?")
console.log(agree) */

//Date Object
//Creating a time object
/* const now = new Date()
console.log(now) */

//Getting full year
/* const now = new Date()
console.log(now.getFullYear()) */

//Getting month
/* const now = new Date()
console.log(now.getMonth()) */

//Getting date
/* const now = new Date()
console.log(now.getDate()) */

//Getting day
/* const now = new Date()
console.log(now.getDay()) */


