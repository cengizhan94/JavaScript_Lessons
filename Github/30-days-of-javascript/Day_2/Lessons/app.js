//Logical Operators

//&& amplersand operator example
// const check = 4 > 3 && 10 > 5 //true && true -> true
// const check = 4 > 3 && 10 < 5 //true && false -> false
// const check = 4 < 3 && 10 < 5 // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5 // true || true -> true
const check2 = 4 > 3 || 10 < 5 // true || false -> true
const check3 = 4 < 3 || 10 < 5 // false || false -> false

//! Negation examples

let check4  = 4 > 3 //true
let check5 = !(4 > 3) //false

let isLightOn = true
let isLightOff = !isLightOn //false
let isMarried = !false //true


