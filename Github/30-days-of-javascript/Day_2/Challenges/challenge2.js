//Exercise Level2
//1-Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

/* const base = parseFloat(prompt("Enter the base length of the triangle: "))
const height = parseFloat(prompt("Enter the height of the triangle: "))

const area = 0.5 * base * height;

console.log("Area of triangle: ", area) */

//2- Write a script that prompt the user side a, side b, and side c of the  triangle and calculate the perimeter of triangle (perimeter = a + b + c)

/* const sidea = parseFloat(prompt("Enter the side a of triangle"))
const sideb = parseFloat(prompt("Enter the side b of triangle"))
const sidec = parseFloat(prompt("Enter the side c of triangle"))

const perimeter = sidea + sideb + sidec;
console.log("Perimeter of triangle: ", perimeter) */

// -3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

/* const length = parseFloat(prompt("Enter the length of rectangle"))
const width = parseFloat(prompt("Enter the width of rectangle"))
const perimeter = 2 * length + width;
console.log("Perimeter of rectangle" , perimeter) */

//4- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

/* const radius = parseFloat(prompt("Ener the radius of circle"))
const pi = Math.PI;
const area = pi * radius * radius
const circrumference = 2 * pi * radius;
console.log("Circle area ",area)
console.log("Circumference ",circrumference) */

/* //5- Calculate the slope, x-intercept and y-intercept of y = 2x-2
const slope = 2;
const xIntercept = (0 + 2) / 2;
const yIntercept = 2 * 0 - 2;
console.log("Slope ", slope)
console.log("x-intercept", xIntercept)
console.log("y-intercept", yIntercept)

//6- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

const x1 = 2;
const x2 = 2;
const y1 = 6;
const y2 = 10;

const slope2 = (y2 -y1) / (x2 - x1);
console.log("Slope ",slope2)

//7-Compare the slope of above two questions.

if (x1 === x2){
    console.log("There is no horizontal line, no slope.")
}else{
    console.log("Slope between two points given in the second question: ", slope2)
}

//8- Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

const a = 1;
const b = 6;
const c = 9;

const discriminant = b * b - 4 * a * c;
if (discriminant > 0){
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("Two real and different solutions", x1, x2)
}else if(discriminant === 0){
    const x = -b / (2 * a);
    console.log("A real solution: ",x)
}else{
    console.log("There is no real solution")
} */

//9-Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/* const hoursWorked = parseFloat(prompt("Enter the number of hours worked: "))
const ratePerHour = parseFloat(prompt("Enter the rate per hour: "))

const pay = hoursWorked * ratePerHour;

console.log("The person's pay is : ", pay) */

//10-If the lengtth of your name is greater than 7 say, your name is long else say your name is short.

/* const myName = "Cengiz Han"
 
if (myName.length >= 7){
    console.log("myNaname is long")
}else{
    console.log("myName is short")
} */

//11- Compare your first name length and your family name length and you should get this output

/* const firstName = "Cengiz Han"
const lastName = "Uyar"

if(firstName.length > lastName.length){
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
}else{
    console.log("Error")
} */

//12- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
/* const myAge = 250;
const yourAge = 29;
const older = myAge - yourAge;

if(myAge > yourAge){
    console.log(`I am ${older} years older than you`)
}else{
    console.log(`You ${older} years older than me`)
} */

//13-Using prompt get theyear the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

/* const birthYear = parseInt(prompt("Enter the year you were born: "))

const currentYear = new Date().getFullYear();
const userAge = currentYear - birthYear;

if (userAge >= 18){
    console.log("You are eligible to drive. habe a safe journey!")
}else{
    const yearsTowait = 18 - userAge;
    console.log(`You are not eligile to drive yet. Please wait for ${yearsTowait} more years`)
} */

//14- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/* const age = parseInt(prompt("How old are you?"))
const secondsInAYear = 365 * 24 * 60 * 60;
const totalSecond = age * secondsInAYear;
const maxAgeInSeconds = 100 * secondsInAYear;
const remainingSeconds = maxAgeInSeconds - totalSecond;

console.log(`A person can live for ${totalSecond} seconds`)
if (remainingSeconds >= 0){
    console.log(`You have approximately ${remainingSeconds} seconds lef to live until reaching 100 years`)
}else{
    console.log("You have already reached 100 years. Congratulations!")
} */

//15- Create a human readable time format using the Date time object

/* const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const formattedTime1 = `${year}-${month}-${day} ${hours}: ${minutes}: ${seconds}`;
const formattedTime2 = `${day}-${month}-${year} ${hours}: ${minutes}: ${seconds}`
const formattedTime3 = `${day}/${month}/${year} ${hours}: ${minutes}: ${seconds}`
console.log("Human-readable time format: ",formattedTime1);
console.log("Human-readable time format: ",formattedTime2);
console.log("Human-readable time format: ",formattedTime3); */



