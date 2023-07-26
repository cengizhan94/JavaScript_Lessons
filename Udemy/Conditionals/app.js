//if else Ternary Operator

const number = 120;

/* if (number === 100){
    console.log("Number is 100")
}else{
    console.log("Number is not 100")
} */

console.log(number === 100 ? "Number is 100" : "Number is not 100")

if (number === 100) console.log("Number is 100")

else console.log("Number is not 100")


//Swich - Case

const process = 1;

switch(process){
    case 1: 
        console.log("Process 1");
        break;
    case 2:
        console.log("process 2");
        break;
    case 3:
        console.log("process 3");
        break;
    default:
        console.log("undefined process");

}

switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
}

document.getElementById("demo").innerHTML = "Today is " + day;