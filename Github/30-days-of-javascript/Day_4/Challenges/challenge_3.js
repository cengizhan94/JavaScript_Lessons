import countries from './Challenge2/countries.js'
import webTechs from './Challenge2/web_techs.js'

//Challenge level 3
//1-The ollowing is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age

let sortAges = ages.sort((a,b) => a-b);
console.log(sortAges)

let minAge = Math.min(...ages)
let maxAge = Math.max(...ages)
console.log(minAge,maxAge)

//Find the median age(one middle item or two middle items divided by two)
/* const length = ages.length;

let median;
if (length % 2 === 1){
    median = ages[Math.floor(length / 2)]
}else{
    const middleIndex = length / 2;
    median = (ages[middleIndex -1] + ages[middleIndex])/2;
}

console.log("Median age: ", median) */

//Find the average age(all items dibided by number of items)
const totalAges = ages.reduce((sum,age) => sum + age, 0);
const numberOfAges = ages.length;
const averageAge = totalAges / numberOfAges;

console.log("Average Age: ", averageAge)

//Find the range of the ages(max minus min)
/* maxAge = ages[ages.length -1]
minAge = ages[0];
const range = maxAge - minAge;

console.log("Range of ages: ",range); */

//Compare the value of (min - average) and (max - average), use abs() method 
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);
console.log(diffMaxAverage);
console.log(diffMinAverage);
//a- slice the first ten countries from countries array
console.log(countries)
console.log(countries.slice(0,10))

//b- find the middle country(ies) in the countries array
let middleIndex = countries.length / 2 -1
const middleItem = countries[middleIndex]
console.log(middleItem)// Middle item

//3. Divide the countries array into two equal arrays if it is even. If countries array is not even, one more country for thefirst half.

const numberOfCountries = countries.length

if (numberOfCountries % 2 ===0){
    const middleIndexCountry = numberOfCountries / 2
    const firstHalf = countries.slice(0, middleIndex)
    const secondHalf = countries.slice(middleIndexCountry);
    console.log("First Half: ", firstHalf)
    console.log("Second Half: ",secondHalf)
}else{
    const middleIndexCountry2 = Math.floor(numberOfCountries / 2);
    const firstHalf2 = countries.slice(0, middleIndexCountry2 + 1);
    const secondHalf2 = countries.slice(middleIndexCountry2 +1);
    console.log("First Half: ", firstHalf2);
    consonle.log("Second Half: ",secondHalf2);
}

