//Day 4 Exercises
//level 1
//1-Get user input using prompt("enter your age:"). If user is 18 or older, give feedback:"You are old enough to drive" but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const age = parseInt(prompt("Enter your age:"))
const agesleft = 18 - age;

if(age > 80){
    console.log("You too old for driving a vehicle.")
}else if (age >= 18){
    console.log(`your age is : ${age} you are old enough to drive`)
}else if (age < 18){
    console.log(`your age is: ${age}. You are left with ${agesleft} years to drive. `)
}else{
    console.log("Entered data is not your age.")
}