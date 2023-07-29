//Exercises: level2
//1- Write a code which can give grades to students according to their scores:A = 80 - 100, B = 70 - 89, C= 60 - 69, D = 50-59, F= 0-49

/* const grade = parseFloat(prompt("Enter your grade:"))

if (grade >= 90 && grade <= 100 ){
    console.log(`Your grade is ${grade}. Your note is A`)
}else if (grade >= 70 && grade <= 89){
    console.log(`Your grade is ${grade}. Your note is B`)   
}else if(grade >= 60 && grade <= 69){
    console.log(`Your grade is ${grade}. Your note is C`)
}else if(grade >= 50 && grade <= 59){
    console.log(`Your grade is ${grade}. Your note is D`)
}else if(grade >= 0 && grade <= 49){
    console.log(`Your grade is ${grade}. Your note is F`)
}else{
    console.log(`${grade} You must entered between 100 and 0 grade.`)
} */

//2- Check if the season is Autumn, Winter, Spring or Summer. If the user input is: 
/*
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

const month = prompt("Which month are we in?").toUpperCase()
switch(true){
    case month == "SEPTEMBER"||month == "OCTOBER"||month == "NOVEMBER":
        console.log("The season is Autumn")
        break
    case month == "DECEMBER"||month=="JANUARY"||month=="FEBRUARY":
        console.log("The season is Winter")
        break
    case month == "MARCH"||month=="APRİL"||month=="MAY":
        console.log("The season is Spring")
        break
    case month == "JUNE"||month=="JULY"||month=="AUGUST":
        console.log("The season is Summer")
        break
    default:
        console.log("Enter a valid month")
}
