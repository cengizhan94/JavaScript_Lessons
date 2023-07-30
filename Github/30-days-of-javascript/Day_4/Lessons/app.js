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

//Slice array elements
//Slice: To cut out a multiple items in range. It takes two parameters: starting and ending position.It doesn't include the ending position

/* const numbers = [1,2,3,4,5]
console.log(numbers.slice(0, numbers.length))
console.log(numbers.slice(1,4)) */

//Splice method in array
//Splice: It takes three parameters: starting position, number of times to be removed and number of items to be added.

const numbers =[0,1,2,3,4,5,6,7,8,9]

numbers.splice()

numbers.splice(3,3,7,8,9)//start in index 3, remove 3 items and add that items (7,8,9)
console.log(numbers)

//Adding item to an array using push
//push: adding item in the end. To add item to the end of an existing array we use the push method.

const arr = ["item1","item2","item3"]
arr.push('new item')
console.log(arr)

//pop
arr.pop()//remove one item from the end.
console.log(arr)


//shift
arr.shift()//remove one item from the beginning
console.log(arr)

//unshift
arr.unshift(0)//adding one item from the beginning.
console.log(arr)

//reverse
numbers.reverse()//reverse array order.
console.log(numbers)

//sort
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redus",
    "Node",
    "MongoDB"
]

webTechs.sort()
console.log(webTechs)
//after sorting we can reverse it
webTechs.reverse()
console.log(webTechs)

//Array of arrays
//Array can store different data types including an array itself. Let us create an array of arrays:

const firstNums = [1,2,3]
const secondNums = [1,4,9]

const arrayOfArray = [[1,2,3],[1,4,9]]
console.log(arrayOfArray[1])

console.log(arrayOfArray.length)
