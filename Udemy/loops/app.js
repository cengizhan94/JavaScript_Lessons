//While loop

//let i  = 0 ;

/* while(i<10){  //< infinite loop
    console.log(i);
} */

/* while(i < 10){
    console.log(i);
    i++;
} */

/* let i = 10;
while (i > 0){
    console.log(i);
    //i--;
    i -= 2;
} */

// Break & Continue
/* let i = 0;
while(i < 10){
    console.log(i)
    if(i == 5){
        break
    }
    i++;  
} */

//let i = 0;
/* while (i < 10){  //<<<<<<<<infinite Loop
    if (i == 3 || i == 5){
        continue;
    }
    console.log(i)
    i++
} */

/* while (i < 10){
    if (i == 3 || i == 5){
        i++;
        continue;
    }
    console.log(i);
    i++
} */

//Do While

/* let i = 0;

do {
    console.log(i);
    i++
}while (i < 10); */

//For Loop

const langs = ["Python", "JavaScript", "Java"];
/* 
for (let index = 0; index < langs.length; index++){
    console.log(langs[index]);
} */

//forEach
/* langs.forEach(function(lang, index){
    console.log(lang, index);
}); */

//map
/* const users = [
    {name : "Cengiz Han", age:29},
    {name : "Zeynep", age: 12},
    {name : "Pervin", age: 50}
];

const names = users.map(function(user){
    return user.name
});
const ages = users.map(function(user){
    return user.age
})
console.log(ages)
console.log(names) */

const user = {
    name : "Cengiz Han",
    age: 29
}

for (let key in user){
    console.log(key, user[key])
}