//Exercises level 3
//1- Write a program which tells the number of days in a month.

const Day31 = ["JANUARY","MARCH","MAY","JULY","AUGUST","OCTOBER","DECEMBER"]
const Day30 = ["APRIL","JUNE","SEPTEMBER","NOVEMBER"]
const Day29_28=["FEBRUARY"]
const month = prompt("Enter a month:").toUpperCase()

if (Day31.includes(month)){
    console.log(`${month} has 31 days.`)
}else if(Day30.includes(month)){
    console.log(`${month} has 30 days.`)
}else if(Day29_28.includes(month)){
    console.log(`${month} has 29-28 days.`)
}else{
    console.log("Please enter valid month.")
}

//1-Write a program which tells the number of days in a month, now consider leap year.
const year = parseInt(prompt("Enter year."))
let daysInMonth;
if(Day29_28.includes(month)){
    if(year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0)){
        daysInMonth = 29;
    }else{
        daysInMonth = 28;
    }
}else{
    console.log("Enter valid month")
    daysInMonth = 0;
}
if(daysInMonth !==0){
    console.log(`${year}-${month} month ${daysInMonth} day`)
}