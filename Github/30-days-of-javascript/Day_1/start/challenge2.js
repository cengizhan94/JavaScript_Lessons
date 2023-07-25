//Exercises
//1)
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//2)
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
//3)
var num = "10"
console.log(Number(num))
//4)
var num2 = 9.81
var numInt = Math.ceil(num2)
console.log(numInt)
//5)
let string = "Python Jargon" 
console.log(string.endsWith("on"))
//6)
let string2 = "I hope this course is not full of jargon."
let pattern = /jargon/gi
console.log(string2.match(pattern))
//7)
let randomNumber = Math.ceil(Math.random()*100)
//8)
let randomNumber2 = Math.ceil(Math.random()*100)+50;
//9)
let randomNumber3 = Math.ceil(Math.random()*255)
console.log(randomNumber)
console.log(randomNumber2)
console.log(randomNumber3)
//10)
const str = "JavaScript"
const randomIndex = Math.floor(Math.random()*str.length);
const randomChar = str[randomIndex];
console.log("Random char: ", randomChar)
//11)
for (let i = 1; i <= 5; i++) {
    let row = "";
  
    for (let j = 1; j <= 5; j++) {
      if (j === 1) {
        row += i + " ";
      } else {
        row += Math.pow(j, i) + " ";
      }
    }
  
    console.log(row);
  }

//12

let string3 = "You cannot end a sentence with because because because is a conjunction"
console.log(string3.substring(31,55))






