const countries = [
    'Turkey',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan'

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

//1- Declare an empty array:
const arr = Array()
let arr2 = []
console.log(arr,arr2)

//2-Declare an array with more than 5 number of elements:

const numbers = [1,2,3,4,5]
console.log(numbers)

//3- Find the length of your array:
console.log(numbers.length)
//4- Get the first item, the middle item and the last item of the array

console.log(countries[0]) //first item

let middleIndex = countries.length / 2 -1
const middleItem = countries[middleIndex]
console.log(middleItem)// Middle item


let lastIndex = countries.length -1
const lastItem = countries[lastIndex]
console.log(lastItem)//Last item

//5- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [
    "Cengiz Han",
    29,
    1.98,
    false,
    ["Zeynep","Pervin"]
]

console.log(mixedDataTypes.length)

//6- Declare an array variable name it Companies and assign initial calues Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const companies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
//7-
/* console.log(companies) */

//8- 
/* console.log(companies.length) */
//9-
/* console.log(companies[0])
const lastindex = companies.length -1
const lastCompany = companies[lastindex]
console.log(lastCompany) */
//10- print out each company
/* const sliceCompany = companies.slice()
console.log(sliceCompany.toString()) */

//11-Change each company name to uppercase one by one and print them out

 const upCompanies = companies.toString()
const upperCompanies = upCompanies.toUpperCase()
console.log(upperCompanies)
console.log(companies[0].toUpperCase())

//forEach
/* companies.forEach(myFunction)
function myFunction(item,index,companies){
    console.log(companies[index].toUpperCase())
} */

//12- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM , Oracle and Amazon ar big IT companies.

const sentence = companies.join(", ")+ " are big IT companies.";
console.log(sentence)

//13-Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
const itCompanies = upperCompanies
const searchCompany = prompt("Enter a company name:").toUpperCase()

if (itCompanies.includes(searchCompany)){
    console.log("We found the company: ",searchCompany)
}else{
    console.log("Company is not found.")
}

//14- Filter out companies which have more than one o without the filter moethod







