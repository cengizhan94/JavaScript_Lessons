//Exercises: Level1
//1-Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

/* const firstName = "Cengiz Han"
const lastName = "Uyar"
const country = "Turkey"
let city = "Tokat"
let age = 29
let isMarried = false

console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(age), typeof(isMarried)) */

//2-Check if type of '10' is equal to 10
/* const number = 10
const number2 = "10"
console.log(number === number2) */ //false

//3- Check if parseInt('9.8') is equal to 10

/* const parseInt = '9.8'
const number3 = 10
console.log(parseInt === number3) */ //false

//4- /* Boolean value is either true or false. Write three JavaScript statement which provide truthy value.Write three JavaScript statement which provide falsy value. */

/* const a = 1 > 0
const b = 2 == 2
const c = "a" == "a"

console.log(a,b,c)

const e = "e" == "r"
const f = 2 > 10
const g = 3 == 33

console.log(e,f,g) */

//5- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()


/* let a = 4 > 3 //true
let b =4 >= 3 //true
let c =4 < 3 //false
let d =4 <= 3 // false
let e =4 == 4 //true
let f =4 === 4 // true
let g =4 != 4 //false
let h =4 !== 4 // false
let i =4 != "4" //false
let j =4 == "4" //true
let k =4 ==="4" //false */

/* console.log(a,b,c,d,e,f,g,h,i,j,k)
let word = "python"
let word2 = "jargon"
console.log(word.length !== word2.length)  *///false

// 6-Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

/* let aa = 4 > 3 && 10 < 12 //true
let ab = 4 > 3 && 10 > 12 //false
let ac = 4 > 3 || 10 < 12 //true
let ad = 4 > 3 || 10 > 12 // true
let af = !(4 > 3) //false
let ag = !(4 < 3) //true
let ah = !(false) //true
let aj = !(4 > 3 && 10 < 12) //false
let ak = !(4 > 3 && 10 > 12) //true
let al = !(4 === '4') //true
console.log(aa,ab,ac,ad,af,ag,ah,aj,ak,al)

let mainString = "There is no 'on' in both dragon and python";
let subString = "on";
let result = !mainString.includes(subString);
console.log(result); */

//7-Use the Date object to do the following activities
//What is the year today?
const now = new Date()
console.log(now.getFullYear())
//What is the month today as a number?
console.log(now.getMonth())
//What is the date today?
console.log(now.getDate())
// What is the day today as a number?
console.log(now.getDay())
//What is the hours now?
console.log(now.getHours())
//What is the minutes now?
console.log(now.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())