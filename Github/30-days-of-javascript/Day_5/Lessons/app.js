// Loops
//For loop
for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

let countries = ["Turkey","Sweden","Denmark","Norway","Iceland"]
let newArr = []
for (let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
    
}
console.log(newArr);

//Adding all elements in the array

let numbers = [1,2,3,4,5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}

console.log(sum)

//Creating a new array based on the existing array
newArr = []
for(let i = 0; i< numbers.length; i++){
    newArr.push(numbers[i] ** 2)
}

console.log(newArr);

//While loop
console.log("While loop:")
let i = 0
while(i <= 5){
    console.log(i)
    i++
}

//do while loop
console.log("do while loop: ")
let j = 0
do{
    console.log(j)
    j++
}while (j <=5)

//for of loop
//We use for of loop for arrays. Its is very hand way to iterate thorugh an array if we are not interested in the index of each element in the array
console.log("for-of loop")
for (const num of numbers){
    console.log(num)
}
console.log("*************")
for (const num of numbers){
    console.log(num * num)
}
console.log("+++++++++++++")
for(const num of numbers){
    sum = sum + num
}
console.log(sum)

const webTechs = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "REDUX",
    "NODE",
    "MONGODB"
]

for(const tech of webTechs){
    console.log(tech.toUpperCase())
}

for(const tech2 of webTechs){
    console.log(tech2[0])
}

newArr = []
for(const country of countries){
    newArr.push(country.toUpperCase())
}
console.log(newArr)

//break
//Break is used to interrupt a loop
for(let i = 0; i <= 5; i++){
    if(i == 3){
        break
    }
    console.log(i)
}
//The above code stops if 3 found in the iteration process.

//continue
//We use the keyword continue to skip a certain iterations
for(let i = 0; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}