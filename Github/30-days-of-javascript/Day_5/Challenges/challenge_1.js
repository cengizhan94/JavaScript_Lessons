//Level 1 challenge

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1- iterate 0 to 10 using for loop, do the same using while and do while loop
//for
console.log("for loop")
for(let i=0; i <= 10; i++){
    console.log(i)
}

//while
console.log("while loop")
let i = 0;
while(i <= 10){
    console.log(i)
    i++
}

//do while
console.log("do while")
let j = 0;
do{
    console.log(j)
    j++
}while(j <= 10)

//2- Iterate 10 to 0 using for loop, do the same using while and do while loop

console.log("for loop")
for(let i=10; i >= 0; i--){
    console.log(i)
}

//while
console.log("while loop")
let a = 10;
while(a >= 0){
    console.log(a)
    a--
}

//do while
console.log("do while")
let k = 10;
do{
    console.log(k)
    k--
}while(k >= 0)

//3- Iterate 0 to n using for loop
console.log("for loop n")
let n = 5;
for (let i = 0; i<=n; i++){
    console.log(i)
}
//4- Write a loop that makes the following pattern using console.log()
for(let i = 1; i <= 7; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += '#'
    }
    console.log(pattern)
}
/*  #
    ##
    ###
    ####
    #####
    ######
    ####### */
//5-Use loop to print the following pattern:
/* 0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */

console.log("for of loop")
let numbers = [1,2,3,4,5,6,7,8,9,10]
for(const num of numbers){
    console.log(`${num} x ${num} = ${num * num}`)
}

//6- Using loop print the following pattern

