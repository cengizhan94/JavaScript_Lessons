/* //Arrays
//Using Array constructor
const arr = Array();
//let arr = new Array();
console.log(arr) //[]

//Using square brackets([])
const arr2 = []
console.log(arr2) //[]
 */

//Array values
/* const numbers = [0,3.14,9.81,23,37,98.6,100]
const fruits = ['apple','banan','cherry', 'mango','lemon','orange']
const vegatables = ['Tomato','Patato','Cabbage','Onion','Carrot']
const animalProducts =['Milk','Meat','Butter','Yogurt']
const webTechs = ['HTML','CSS','JS','React','Redux','Noe','MongoDB']
const countries = ['Turkey']

console.log('Numbers:',numbers)
console.log('Number of numbers: ', numbers.length)

console.log("Fruits: ", fruits)
console.log("Number of fruits: ",fruits.length) */

//Array with different types.
/* const arr = [
    'Cengiz Han',
    29,
    false,
    {country: 'Turkey', city: 'Tokat'},
    {skills: ['HTML','CSS','JS','Django','Python']}
]
console.log(arr) */

//Array split

/* let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) */

//Accessing array items using index
/* 
const names = ['Cengiz Han','Oguz','Zafer','Zeynep','Pervin','Mustafa']
let firstName = names[0]
console.log(firstName)

let lastIndex = names.length-1
lastName = names[lastIndex]
console.log(lastName) */

//Modifying array element
/* const numbers = [1,2,3,4,5,6]
numbers[0] = 10
numbers[1] = 20
console.log(numbers) */

//Methods to manipulate array
/* const arr = Array()
console.log(arr)

const eightEmptyValues = Array(8)
console.log(eightEmptyValues) */

//Creating static values with fill

/* const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

const eight0Values = Array(8).fill('0')
console.log(eight0Values) */

//Concatenating array using concat

/* const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) */

//Check items in a list
/* const fruits = ['banana','orange','mango','watermelon']
let index = fruits.indexOf('lemon')
if (index === -1){
    console.log("This fruit does not exist in the array")
}else{
    console.log("This fruit does exist in the array")
} */

//Getting last index of an element in array

/* const numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers.lastIndexOf(2))
console.log(numbers.lastIndexOf(0))
console.log(numbers.lastIndexOf(4)) */

//includes() To check if an item exist in an array. If it exist it returns the true. else it return false.

/* const numbers = [1,2,3,4,5]
console.log(numbers.includes(5))
console.log(numbers.includes(0)) */

/* const numbers = [1,2,3,4,5]
console.log(Array.isArray(numbers))
console.log(Array.isArray) */

//Converting array to string
/* const numbers = [1,2,3,4,5]
console.log(numbers.toString()) */

//Joining array elements
//join: It is used to join the lements of the array, the argument we passed in the join method wil l be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined betrween the items.
/* const numbers = [1,2,3,4,5]
console.log(numbers.join("*")) */
