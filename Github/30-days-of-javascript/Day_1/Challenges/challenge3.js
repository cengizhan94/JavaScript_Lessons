//Exercises 3
//1)
const lovestring = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(lovestring.search("love"))
//2
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanedSentence= sentence.replace(/[^\w\s]/g, "");
const words = cleanedSentence.split(" ");
const wordCounts ={};
for (const word of words){
    const lowercaseWord = word.toLowerCase();
    wordCounts[lowercaseWord] = (wordCounts[lowercaseWord] || 0)+1;
}
let mostFrequentWord = "";
let maxCount = 0;

for (const word in wordCounts){
    if (wordCounts[word] > maxCount){
        mostFrequentWord = word;
        maxCount = wordCounts[word];
    }
}

console.log("Cleaned Sentence: ", cleanedSentence);
console.log("Most Frequent Word: ", mostFrequentWord);

//4
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const numbers = text.match(/\d+/g)
let totalIncome = 0;
for (const number of numbers){
    totalIncome += parseInt(number, 10)
}

const yearlyIncome = totalIncome * 12
console.log(yearlyIncome)


