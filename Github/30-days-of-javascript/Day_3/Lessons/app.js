//JavaScript Conditionals
//If-If else / switch / ternary operator

//If
let num = 0
if (num > 0 ){
    console.log(`${num} is a positive number.`)
}

//else
if(num >= 0){
    console.log(`${num} is a positive number.`)
}else{
    console.log(`${num} is a negative number`)
}

//else if

let a = 0
if (a > 0){
    console.log(`${a} is a positive number`)
}else if(a == 0){
    console.log(`${a} is zero`)
}else if(a < 0){
    console.log(`${a} is a negative number.`)
}else{
    console.log(`${a} is not a number`)
}

//Switch

let weather = `rainy`
switch(weather){
    case `rainy`:
        console.log(`You need a rain coat`)
        break
    case `cloudy`:
        console.log(`It might be cold, you need a jacket.`)
        break
    case `sunny`:
        console.log(`Go out freely`)
        break
    default:
        console.log(`No need for rain coat`)
}   

let num2 = prompt(`Enter a number`)

switch (true){
    case num2 > 0:
        console.log(`${num2} Number is positive`)
        break
    case num2 < 0:
        console.log(`${num2} Number is negative`)
        break
    case num2 == 0:
        console.log(`${num2} Number is zero`)
        break
    default:
        console.log(`${num2} Entered value was not a number`)
        
}

//Ternary Operators

let isRaining = false

isRaining
    ? console.log("You need a rain coat.")
    : console.log("No need for a rain coat")