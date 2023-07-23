let space = " "
let firstName = "Cengiz Han"
let lastName = "Uyar"
let country = "Turkey"
let city = "Tokat"
let languege ="JavaScript"
let job = "Free"
let age = 30 

let fullName = firstName + space + lastName
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country
console.log(personInfoOne)

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${country}. I am a ${job} I learn ${languege}`

console.log(personInfoTwo)
console.log(personInfoThree)
