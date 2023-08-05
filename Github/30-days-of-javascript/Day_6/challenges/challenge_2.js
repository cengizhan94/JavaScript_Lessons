//challenge level 2
//1- linear equation is clculated as follows: ax + by + c = 0ç. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
  if (a === 0 && b === 0) {
    if (c === 0) {
      return "There are many solutions (infinite number of points)";
    } else {
      return "No solution (contradiction)";
    }
  }else if (a === 0){
    return `Y = ${-c/b}`
  }else if(b === 0){
    return `X = ${-c/a}`
  }else{
    return `Y = ${-a /b} X + ${-c/b}`
  }
}

console.log(solveLinEquation(2,3,-6))
console.log(solveLinEquation(0,5,10))
console.log(solveLinEquation(0,0,7))

//2-Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a,b,c){
  const discriminant = b * b - 4 * a * c;
  if(discriminant > 0){
    const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    return `Two different real root: x1 = ${x1},x2 = ${x2}`
  }else if(discriminant === 0){
    const x = -b / (2*a);
    return `Single real root :x = ${x}`;
  }else{
    const realPart = -b / (2*a)
    const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2*a)
    return `Two complex root: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}`
  }
}

console.log(solveQuadEquation(1,-3,2));
console.log(solveQuadEquation(1,2,1));
console.log(solveQuadEquation(2,-5,3));

//3- Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array){
 
  for(i = 0; i < array.length; i++){
    console.log(array[i])
  }
}
const array = [1,2,3]
printArray(array)

//4- Write a function name showDateTime which shows time in this format 05/09/2023 11:29 using the Date Object


function showDateTime(){
   const now = new Date();
   const year = now.getFullYear();
   const month = String(now.getMonth()+1).padStart(2,"0");
   const day = String(now.getDate()).padStart(2,"0");
   const hours = String(now.getHours()).padStart(2,"0")
   const minutes = String(now.getMinutes()).padStart(2,"0")

   const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}`;
   console.log(formattedDateTime);
}
showDateTime()

//5-Declare a function name swapValues. This function swap value of x to y.

function swapValues(x, y) {
  const temp = x;
  x = y;
  y = temp;
  
  // Returning the swapped values in an object
  return { x: x, y: y };
}

let a = 5;
let b = 10;

console.log(`Before swapping: a = ${a}, b = ${b}`);

const swappedValues = swapValues(a, b);

console.log(`After swapping: a = ${swappedValues.x}, b = ${swappedValues.y}`);

//6 Declare a function name revarseArray. It takes array as a parameter and it returns the reverse of the array

function reverseArray(arr){
  const reversed = [];
  for (let i = arr.length -1; i >= 0; i--){
    reversed.push(arr[i]);
  }
  return reversed
}

const originalArray = [1,2,3,4,5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);

//7-Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(array){
  let capitalized = [];
  for (let i = 0; i < array.length; i++){
    const originalElement = array[i]
    const capitalizedElement = originalElement.charAt(0).toUpperCase() + originalElement.slice(1);
    capitalized.push(capitalizedElement)
  }
  return capitalized;
}

const originalArray2 = ["cengiz","zafer","oguz"];
const capitalizedArray = capitalizeArray(originalArray2);
console.log(capitalizedArray);

//8-