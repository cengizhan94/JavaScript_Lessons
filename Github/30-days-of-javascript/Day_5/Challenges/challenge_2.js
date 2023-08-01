//Challenge level 2
//1- Develop a small script with generate any number of characters random id

const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let randomID = "";

for(let i = 0; i < 32; i++){
    const randomIndex = Math.floor(Math.random()* charset.length);
    randomID += charset[randomIndex];
}
console.log("Random ID: ", randomID)
//2-Write a script which generates a random hexadecimal number:
let colorCode = "#";
const hexadecimalChars = "0123456789ABCDEF";
for(let i = 0; i < 6; i++){
    const randomIndex = Math.floor(Math.random()*hexadecimalChars.length);
    colorCode += hexadecimalChars[randomIndex];
}
console.log("Random hexadecimal code: ",colorCode)

//3- Write a script which generates a random rgb color numer.
const red = Math.floor(Math.random()*256);
const green = Math.floor(Math.random()*256);
const blue = Math.floor(Math.random()*256);

const randomRGBCollor = `rgb(${red}, ${green},${blue})`;
console.log("Random RGB color: ",randomRGBCollor)

//4- Using the below countries array, create the following new array.
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"] 
let randomCountries = []

for(let i = 0; i < countries.length; i++){
    const randomCountry = Math.floor(Math.random()*countries.length)
    randomCountries.push(countries[randomCountry])
}
console.log(randomCountries)

//5-Using the above countries array, create an array for countries length.


for (let i = 0; i < countries.length; i++) {
  const randomCountryIndex = Math.floor(Math.random() * countries.length);
  const randomCountry = countries[randomCountryIndex];
  randomCountries.push(randomCountry);

  console.log(`${randomCountry}'s length:`, randomCountry.length);
}
//6->

const result = []
for(let i = 0; i < countries.length; i++){
    const country = countries[i]
    const abbreviation = country.substring(0,3).toUpperCase();
    const length = country.length;

    const countryData = [country, abbreviation, length];
    result.push(countryData);
}

console.log(result)

//7- In above countries array, check if there is a country or countries containing the word'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print'All these countries are without land'

