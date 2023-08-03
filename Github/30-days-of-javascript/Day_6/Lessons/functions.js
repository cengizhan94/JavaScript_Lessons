//Function Declaration
/* 
function functionName(){
    //code goes here
}

functionName() //calling function
*/
//Function without a parameter and return

//Function can be declared without a parameter:
function square(){
    let num = 2
    let sq = num * num
    console.log(sq)
}
square()

function addTwoNumbers(){
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum)
}
addTwoNumbers()

function printFullName(){
    let firstName = "Cengiz Han"
    let lastName = "Uyar"
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName()

//Function with a parameter
//In a function we can pass diffrent data types(number,string,boolean,object,function) as a paramter

/* function functionName(param1){

}
functionName(param1) 
*/

function areaOfCircle(r){
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))

function square2(number){
    return number * number
}
console.log(square2(10))

//Function with two parameters

function sumTwoNumbers(numOne , numTwo){
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(3,5)

function printFullName2(firstName,lastName){
    return `${firstName} ${lastName}`
}
console.log(printFullName2("Cengiz Han","Uyar"))

//Function with many Parameters
function sumArrayValues(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1,2,3,4,5];
console.log(sumArrayValues(numbers))

const areaOfCircle2 = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle2(10))

//Function with unlimited number of parameters
//Unlimited number of paramteres in regular function
//A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

function sumAllNum(){
    console.log(arguments)
}
sumAllNum(1,2,3,4)

function sumAllNums(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum+= arguments[i]
    }
    return sum
}

console.log(sumAllNums(1,2,3,4))

//Unlimited number of paramaters in arrow function
const sumAllNums3 = (...args)=>{
   let sum = 0;
   for(const element of args){
    sum += element
   }
   return sum
}
console.log(sumAllNums3(1,2,3,4,5))
console.log(sumAllNums3(10,20,30,40,50))

//Anonymous Function
//Anonymous function or without name
const anonymousFun = function(){
    console.log( 'I am an anonymous function and my value is stored in anonymousFun')
}

//Expression Function
//Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return  a value from the function we should call the variabnle. look at theexample below

const square3 = function(n){
    return n*n
}
console.log(square3(2))

//Self Invoking Functions
//Self invoking functions are anonymous functions which do not need to be called to return a value


let squaredNum = (function(n){
    return n * n
})(10)
console.log(squaredNum)

//Arrow function
const square4 = n => {
    return n * n
}
console.log(square4(2))

const square5 = n => n * n //->4

const changeToUpperCase = arr =>{
    const newArr = []
    for (const element of arr){
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ["Türkiye","Asya Hun","Kök Türkler","İskitler","Osmanlı İmparatorluğu"]
console.log(changeToUpperCase(countries))

//Function with default parameters

function greetings(name = "Cengiz"){
    let message = `${name}, welcome to 30 Days Of JavaScript`
    return message
}

console.log(greetings())
console.log(greetings("Zeynep"))

/* function calculateAge(birthYear, currentYear = parseInt(prompt("Enter Current Year: "))){
    let age = currentYear - birthYear
    return age
}

console.log("Age: ",calculateAge(parseInt(prompt("Enter your Birth Year")))) */

function weightOfObject(mass, gravity = 9.81){
    let weight = mass * gravity + 'N'
    return weight
}

console.log('Weight of an object in Newton: ',weightOfObject(100))
console.log('Weight of an object in Newton: ',weightOfObject(100, 1.62))

//Let us see how we write the above functions with arrow functions

const generateFullName = (firstName = "Cengiz Han", lastName = "Uyar") => {
    let space = " "
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName())
console.log(generateFullName("Zeynep", "Uyar"))