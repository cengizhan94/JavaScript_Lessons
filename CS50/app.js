function hello(){
    alert('Hello, world!');
}

let counter = 0;
function count(){
    if(document.querySelector("h1").innerHTML === "Hello World!"){
    document.querySelector("h1").innerHTML = "Goodbye!";  
    } else {
        document.querySelector("h1").innerHTML = "Hello World!";
    }
   
}
