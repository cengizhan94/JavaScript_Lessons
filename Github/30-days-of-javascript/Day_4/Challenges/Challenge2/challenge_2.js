//challenge level 2
//1- Create separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.
import countries from './countries.js'
import webTechs from './web_techs.js'

//2-First remove all the punctuations and change the string to array and count the number of in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let punctuationMarks = [".",","]

let textWithoutPunctuation = text.split("").filter(char => !punctuationMarks.includes(char)).join("")
console.log(textWithoutPunctuation)
console.log(textWithoutPunctuation.length)

//3- In the following shoppig cart add, remove, edit items.
let shoppingCart = ["Milk","Coffee","Tea","Honey"]
//add "Meat" in the beginning of your shopping cart if it has not been already added.

if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat")
    console.log(shoppingCart)
}else{
    console.log(shoppingCart);
}

//add "Sugar" at the end of you shopping cart if it has not been already added.

if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar")
    console.log(shoppingCart)
}else{
    console.log(shoppingCart)
}

//remove "Honey" if you are allergic to hone
/* const allergic = prompt("Are you allergic with Honey? Y/N : ").toUpperCase()
if(allergic === "Y"){
    shoppingCart = shoppingCart.filter(item => item !== "Honey")
    console.log(shoppingCart)
}else if(allergic === "N"){
    console.log(shoppingCart)
}else{
    console.log("Please type 'Y' or 'N' ")
} */

//Modify Tea to 'Green Tea'
console.log(shoppingCart.indexOf("Tea")) //3
shoppingCart[3] = "Green Tea"
console.log(shoppingCart);

//4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. if it does not exist add to the countries list.
if(countries.includes("Ethiopia")){
    console.log(countries.indexOf("Ethiopia"))
    countries[4] = "ETHIOPIA"
    console.log(countries)
}else{
    countries.unshift("ETHIOPIA")
    console.log(countries)
}

//5- In the webTechs array check if Sass exists in the array and if it exists  print 'Sass is a CSS preprocess'. If it does not exists add Sass to the array and print the array.
if(webTechs.includes("Sass")){
    let indexOfitem = webTechs.indexOf("Sass")
    countries[indexOfitem] = "Sass is a CSS preprocess"
    console.log(webTechs)
}else{
    webTechs.unshift("Sass")
    console.log(webTechs)
}
//6 Concatenate the following two variables and store it in a fullStack variable

const frontEnd = ["HTML","CSS","JS","React","Redux"]
const backEnd = ["Node","Express","MongoDB"]

let fullStack = frontEnd.concat(backEnd);
console.log("FrontEnd: ",frontEnd)
console.log("BackEnd: ",backEnd)
console.log("Full Stack : ",fullStack)
