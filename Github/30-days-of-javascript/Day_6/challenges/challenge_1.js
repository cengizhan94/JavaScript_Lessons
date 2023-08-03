//Functions Challenge Level 1
//1-Declate a function fullName and  it print out your full name.

function fullName(){
   console.log("Cengiz Han Uyar")
}
fullName()



//2- Declare a function fullName and now it takes firtName lastName as a paramater and it returns your full-name.

function fullName2(firstName = "Cengiz Han",lastName = "Uyar"){
    let fullName = firstName + " " + lastName
    return fullName
 }
 
 console.log(fullName2());

//3- Declate a function add Numbers and it takes two parameters and it returns sum

function addNumbers(number1, number2){
    let sum = number1 + number2
    return sum
}
console.log(addNumbers(5,10))

//4- An area of a rectangle is calculated as follows: are = length x width. write a function which calculates areaOfRectangle.

/* function areaOfRectangle(length, width){
    let calculate = length * width;
    return calculate
}
console.log("Area of Rectangle: ",areaOfRectangle(20,30)) */

//5- A perimeter of a recangle is calculated as follows: perimeter = 2x(length + width). Write a function which calculates perimeterOfRectangle

function perimeterOfRectangle(length, width){
    let perimeter = 2*(length + width)
    return perimeter
}

console.log(perimeterOfRectangle(10,20))

//6-A volume of a rectangular prism is calculated as follows: volume = length * width * height. Write a function which calculates volumeOfRectPrism

function volumeOfRectPrism(length, width,height){
    let volume = length * width * height
    return volume
}

console.log(volumeOfRectPrism(10,20,30))

//7- Area of a circle is calculated as follows: area = PI * r * r. Write a function which calculates areaOfCircle

/* function areaOfCircle(radius){
    let area = Math.PI * radius * radius
    return area
}

let radius = 5;
let result = areaOfCircle(radius)
console.log("Area of Circle is: ",result) */

//8-CircumFerence of a circle is calculated as follows: circumference = 2PIr. Write a function which calculates circumOfCircle

function circumOfCircle(radius){
    let circumference = 2 * Math.PI * radius;
    return circumference;
}

let radiuss = 5;
let resultt = circumOfCircle(radiuss);
console.log("circumference: ", resultt)

//9- Density of a substance is calculated as follows: density= mass/volume. Write a function which calculates denisty.

/* function calculateDensity(mass, volume){
    if(volume <= 0){
        console.log("Volume should be greater than 0")
    }
    let density = mass / volume;
    return density;
}

let mass = 100;
let volume = 5;
let result = calculateDensity(mass, volume)
console.log("Density: ", result) */

// 10- speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

/* function calculateSpeed(distance, time){
    if(time <= 0){
        throw new Error("Time should be greater than 0");
    }
    let speed = distance / time;
    return speed
}

let distance = 1000;
let time = 5;

let result = calculateSpeed(distance,time);
console.log("Speed: ",result)
 */
//11-Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight
/* function weightOfSubstance(mass, gravity){
    let weight = mass * gravity;
    return weight;
}

const gravity = 9.81
let mass = 20
let result = weightOfSubstance(mass , gravity)
console.log("Weight: ",result) */

//12-Temperature in oC can be converted to oF using this formula: oF=(oC * 9/5)+32. Write a function which convert oC to oF convertCelsiusToFahrenheit

function convertCelsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5)+32;
    return fahrenheit
}

console.log(convertCelsiusToFahrenheit(39));

//13- Body mass index (BMI) is calculated as follows: bmi = weight in kg / (height * height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underWeight normal, overWeight  or obese based the information iven below.
/* 
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
 */

function calculateBMI(weight,height){
    let heightInMeter = height / 100;
    let BMI = weight / (heightInMeter * heightInMeter)
    return BMI
}
function getWeightStatus(BMI){
    if(BMI <= 18.5){
        console.log("UnderWeight",BMI)   
    }else if(BMI >= 18.5 && BMI <= 24.9){
        return "NormalWeight"
    }else if(BMI >= 25 && BMI <= 29.9){
        return "OverWeight"
    }else if(BMI >= 30){
        return "OBESE"
    }else{
        console.log("Please Enter valid height and weight")
    }
}

let weight = parseFloat(prompt("Enter your weight"))
let height = parseFloat(prompt("Enter your height"))
let BMI = calculateBMI(weight, height);
let weightStatus = getWeightStatus(BMI)

console.log("BMI: ",BMI.toFixed(1))
console.log("Weight Status: ", weightStatus);

//14- Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
