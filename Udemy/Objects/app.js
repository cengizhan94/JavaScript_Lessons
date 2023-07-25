let value;

const programmer  = {
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
value = programmers[0].name;
console.log(value)
