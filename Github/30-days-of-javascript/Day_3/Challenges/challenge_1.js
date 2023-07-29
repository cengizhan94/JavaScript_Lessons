//Day 4 Exercises
//level 1
//1-Get user input using prompt("enter your age:"). If user is 18 or older, give feedback:"You are old enough to drive" but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/* const age = parseInt(prompt("Enter your age:"))
const agesleft = 18 - age;

if(age > 80){
    console.log("You too old for driving a vehicle.")
}else if (age >= 18){
    console.log(`your age is : ${age} you are old enough to drive`)
}else if (age < 18){
    console.log(`your age is: ${age}. You are left with ${agesleft} years to drive. `)
}else{
    console.log("Entered data is not your age.")
} */

//2- Compare the values of myAge and yourAge using if... else. Based on the comparison and log the result to console stating who is older(me or you). Use prompt("Enter your age:") to get the age as input.

/* const myAge = 29
const yourAge = parseInt(prompt("Enter your age:"))
const ageDiff = yourAge - myAge
if(myAge > yourAge){
    console.log(`My age is ${myAge}, your age is ${yourAge}. I older ${ageDiff} years than you.`)
}else if(myAge < yourAge){
    console.log(`My age is ${myAge}, your age is ${yourAge}. You are older ${ageDiff} years than me.`)
}else if(myAge == yourAge){
    console.log(`My age is ${myAge}, your age is ${yourAge}. We are same age as you`)
}else{
    console.log(`${yourAge} You entered wrong type.`)
} */

//3- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try yo implement it in to ways using if else, ternary operator.

//3- if else
/* const a = 14;
const b = 14; */
/* if (a > b){
    console.log(`${a} is greater than ${b}`)
}else if (a < b){
    console.log(`${b} is greater than ${a}`)
}else{
    console.log(`${a} equals to ${b}`)
}
 */
//Ternary-Operator
/* const result = 
    a > b
    ? `${a} greater than ${b}`:
    a < b
    ?`${b} greater than ${a}`:
    `${a} equals to ${b}`;
console.log(result) */

//4- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const number = parseFloat(prompt("Enter a number:"))

if (number % 2 === 0){
    console.log(`${number} is an even number.`)
}else{
    console.log(`${number} is an odd number.`)
}