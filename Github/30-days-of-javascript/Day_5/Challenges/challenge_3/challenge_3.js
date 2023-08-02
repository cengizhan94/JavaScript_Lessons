import countries from './countries.js'
import webTechs from './web_techs.js'
import mernTechs from './mernTechs.js';

//1
let sortedCountries = countries.sort();
console.log(sortedCountries)
//2
let sortedWebTechs = webTechs.sort();
console.log(sortedWebTechs)
//3
let sortedMernTechs = mernTechs.sort();
console.log(sortedMernTechs)
//4- Extract all the countries contain the word 'land' rom the countries array and print it as array.
let countriesWithLand = []
let hasCountryWithLand = false

for(let i = 0; i < countries.length; i++){
    if(countries[i].toLowerCase().includes('land')){
        countriesWithLand.push([countries[i]])
        hasCountryWithLand = true;
    }
}
if(hasCountryWithLand){
    console.log(countriesWithLand)
}else{
    console.log("These are countries ends without land")
}

//5- Find the country containing the highest number of characters in the countries array

let highestCountry = countries[0];
for(let i = 1; i < countries.length; i++){
    if(countries[i].length > highestCountry.length){
        highestCountry = countries[i];
    }
}

console.log("Highest Country: ", highestCountry)

//6- Extract all the countries containing only four characters from the countries array and print it as array.

let fourCharCountry = countries[0];
let fourCharCountries = [];

for(let i = 1; i < countries.length; i++){
    if(countries[i].length <= 5){
        fourCharCountry = countries[i];
        fourCharCountries.push(countries[i])
    }
}
console.log("Only four characters country is: ", fourCharCountry)
console.log("And more: ", fourCharCountries)
//7-Extract all the countries containing two or more words from the countries array and print it as array
let countriesWithMultipleWords = [];

for(let i = 0; i < countries.length; i++){
    let words = countries[i].split(' ');
    if(words.length >= 2){
        countriesWithMultipleWords.push(countries[i])
        console.log(countriesWithMultipleWords)

    }else{
        console.log("Ther is no two or more words from the countries array")
    }
}

//9-Reverse the countries array and capitalize each country and stored it as an array
let reverseCountries = countries.reverse()
let capitalizedCountries = []
for(let i = 0; i < reverseCountries.length; i++){
    let country = reverseCountries[i];
    let capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
    capitalizedCountries.push(capitalizedCountry);
    
}

console.log(capitalizedCountries)