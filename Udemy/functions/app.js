/* function Hello(fname = "John",lname="Doe", age = "x"){
    console.log(`Name: ${fname} - Last Name: ${lname} - Age: ${age}`);
}
Hello() */
//Hello("Cengiz Han", "Uyar", 29)

//What is return?
/* function square(x){
    return x*x
    
}
function cube(y){
    return y*y*y
}

let a = cube(square(12)); 

console.log(a)*/

//Function Expression
/* const hello = function(name){
    console.log("Hello " + name)
}

hello("Cengiz Han"); */

//Immediately Invoked Function Expression(IIFE)
/* (function(name){
    console.log("Hello: "+ name);

})("Cengiz Han") */

const database = {
    host: "localhost",
    add: function(){
        console.log("Added")
    },
    get: function(){
        console.log("get")
    },
    update: function(id){
        console.log(`Id: ${id} Updated`);
    },
    delete: function(id){
        console.log(`Id: ${id} Deleted`)
    }
}

console.log(database.host)
database.add();
database.delete(1)
database.update(1)