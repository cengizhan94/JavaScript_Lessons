let value;

/* const programmer  = {
    name : "Cengiz Han Uyar",
    age : 25,
    email: "sonsair11@gmail.com",
    langs: ["Python", "Java","JavaScript"],
    
    address : {
        city : "Tokat",
        street : "Behzat"
    },

    work : function(){
        console.log("Programmer working...")
    }
}

value = programmer;

programmer.work()
const programmers = [
    {name : "Cengiz Han", age: 30},
    {name: "Zeynep", age: 12},
]
value = programmers[0].name; */

//Date object

const now = new Date();
const birthdate = new Date("04-25-1994 07:00:00")
const birthdate2 = new Date("April 25 1994")
const birthdate3 = new Date ("04/25/1994")
value = birthdate;

value = birthdate.getMonth();//January is 0 not 1
//value = birthdate.getDate();
//value = birthdate.getDay();
value = birthdate.getHours()
value = birthdate.getMinutes()
value = birthdate.getSeconds()
value = birthdate.getMilliseconds()



console.log(value)

