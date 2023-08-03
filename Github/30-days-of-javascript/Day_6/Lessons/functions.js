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