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

