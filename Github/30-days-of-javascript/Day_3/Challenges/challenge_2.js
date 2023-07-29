//Exercises: level2
//1- Write a code which can give grades to students according to their scores:A = 80 - 100, B = 70 - 89, C= 60 - 69, D = 50-59, F= 0-49

const grade = parseFloat(prompt("Enter your grade:"))

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
}