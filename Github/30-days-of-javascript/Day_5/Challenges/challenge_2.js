//Challenge level 2
//1- Develop a small script with generate any number of characters random id

import countries from './countries.js'
import webTechs from './web_techs.js'

const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
/* let randomID = "";

for(let i = 0; i < 32; i++){
    const randomIndex = Math.floor(Math.random()* charset.length);
    randomID += charset[randomIndex];
}
console.log("Random ID: ", randomID) */
//2-Write a script which generates a random hexadecimal number:
/* let colorCode = "#";
const hexadecimalChars = "0123456789ABCDEF";
for(let i = 0; i < 6; i++){
    const randomIndex = Math.floor(Math.random()*hexadecimalChars.length);
    colorCode += hexadecimalChars[randomIndex];
}
console.log("Random hexadecimal code: ",colorCode) */

//3- Write a script which generates a random rgb color numer.
/* const red = Math.floor(Math.random()*256);
const green = Math.floor(Math.random()*256);
const blue = Math.floor(Math.random()*256);

const randomRGBCollor = `rgb(${red}, ${green},${blue})`;
console.log("Random RGB color: ",randomRGBCollor) */

//4- Using the below countries array, create the following new array.
/* let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]  */
/* let randomCountries = []

for(let i = 0; i < countries.length; i++){
    const randomCountry = Math.floor(Math.random()*countries.length)
    randomCountries.push(countries[randomCountry])
}
console.log(randomCountries) */

//5-Using the above countries array, create an array for countries length.


/* for (let i = 0; i < countries.length; i++) {
  const randomCountryIndex = Math.floor(Math.random() * countries.length);
  const randomCountry = countries[randomCountryIndex];
  randomCountries.push(randomCountry);

  console.log(`${randomCountry}'s length:`, randomCountry.length);
} */
//6->

/* const result = []
for(let i = 0; i < countries.length; i++){
    const country = countries[i]
    const abbreviation = country.substring(0,3).toUpperCase();
    const length = country.length;

    const countryData = [country, abbreviation, length];
    result.push(countryData);
}

console.log(result) */

//7- In above countries array, check if there is a country or countries containing the word'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print'All these countries are without land'
let countriesWithLand = []
let hasCountryWithLand = false;

for(let i = 0; i < countries.length; i++){
    if(countries[i].toLowerCase().includes('land')){
        countriesWithLand.push([countries[i]]);
        hasCountryWithLand = true;
    }
}

if (hasCountryWithLand){
    console.log(countriesWithLand);
}else{
    console.log("All these countries are without land")
}
//8- In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let countriesWithia = [];
let hasCountryWithia = false;

for(let i = 0; i < countries.length; i++){
    if(countries[i].toLowerCase().includes('ia')){
        countriesWithia.push([countries[i]])
        hasCountryWithia = true;
    }
}
if(hasCountryWithia){
    console.log(countriesWithia);
}else{
    console.log("These are countries ends without ia")
}

// 9- Using the above countries array, find the country containing the biggest number of characters.

let longestCountry = countries[0];
for(let i = 1; i < countries.length; i++){
    if(countries[i].length > longestCountry.length){
        longestCountry = countries[i];
    }
}

console.log("Longest country: ", longestCountry)

//10- Using the aboe countries array. find te country containing only 5 caracters.
let fiveCharCountry = countries[0];
let fiveCharCountries = []
for(let i = 1; i < countries.length; i++){
    if(countries[i].length <= 5){
        fiveCharCountry = countries[i];
        fiveCharCountries.push(countries[i])
    }
}

console.log("Only five characters country is : ", fiveCharCountry)
console.log(fiveCharCountries)

//11- Find the longest word in the webTechs array
let longestWebTech = webTechs[0];
for(let i = 1; i < webTechs.length; i++){
    if(webTechs[i].length > longestWebTech.length){
        longestWebTech = webTechs[i];
    }
}

console.log(longestWebTech)

//12 Use the webTechs array to create the following array of arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let output = [];

for(let i = 0; i < webTechs.length; i++){
    output.push([webTechs[i], webTechs[i].length]);
}
console.log(output)

//13-An application created using mongoD, Express, React and Node is called a MERN stack app. Create the acronym Mern by using the array mernStack

let mernStack = ["MongoDB", "Express","React","Node"];
let mernAcronym = "";

for(let i = 0; i < mernStack.length; i++){
    mernAcronym += mernStack[i][0];
}

console.log("MERN acronym: ",mernAcronym);

//14- Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let webTechs2 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for(let webTech of webTechs2){
    console.log(webTech)
}
