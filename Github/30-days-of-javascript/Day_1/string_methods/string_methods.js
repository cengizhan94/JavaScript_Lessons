//accessin_characters

/* let string = "JavaScript"
let firstLetter = string[0]
console.log(firstLetter);

let secondLetter = string[1]
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter);

let lastIndex = string.length - 1

console.log(lastIndex);
console.log(string[lastIndex]) */

//concat

/* let string = "30"
console.log(string.concat("Days", "of", "JavaScript"))
let country = "TR"
console.log(country.concat("land")) */

//ends_with

/* let string = "Love is the best to in this world"
console.log(string.endsWith("world"));
console.log(string.endsWith("Love"));
console.log(string.endsWith("in this world"))

let country = "Turkey"

console.log(country.endsWith("land"))
console.log(country.endsWith("tur"))
console.log(country.endsWith("Tur")) */

//includes
/* let string = "30 Days Of JavaScript"
console.log(string.includes("Days"))
console.log(string.includes("days"))
console.log(string.includes("Script"))
console.log(string.includes("script"))

let country = "Turkey"
console.log(country.includes("TR"))
console.log(country.includes("Tur"))
console.log(country.includes("key"))
console.log(country.includes("Key")) */

//index_of

/* let string = "30 Days Of JavaScript"
console.log(string.indexOf("D"))
console.log(string.indexOf("Days"))
console.log(string.indexOf("days")) */

//last_index_of

/* let string = "I love JavaScript. If you do not love JavaScript what else can you love."

console.log(string.lastIndexOf("love"))
console.log(string.lastIndexOf("you"))
console.log(string.lastIndexOf("JavaScript")) */

//length

/* let js = "JavaScript"
console.log(js.length);

let firstName = "Cengiz Han";
console.log(firstName.length) */

//match
/* let string = "love"
let patternOne = /love/
let patternTwo = /love/gi
string.match(string)
let string2 = "I love JavaScript. If you do not love JavaScript what else can you love"
console.log(string.match("love"))


let pattern = /love/gi
console.log(string.match(pattern))

let txt = "in 2021, I run 30 Days of Python. Now, in 2023 I super exited to start this challenge"
let regEx = /\d/g
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g)) */

//repeat

/* let string = "love"
console.log(string.repeat(10)) */

//replace

let string = "30 Days Of JavaScript"
console.log(string.replace("JavaScript", "Python"))

let country = "Turkey"
console.log(country.replace("Tur", "Tür"))