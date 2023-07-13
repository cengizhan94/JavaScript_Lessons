
function hello(){
    const heading = document.querySelector('h1');
    if(heading.innerHTML === "Hello World!"){
    heading.innerHTML = "Goodbye!";  
    } else {
        heading.innerHTML = "Hello World!";
    }
   
}

let counter = 0;
function count(){
    counter ++ ;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0){
        alert(`Count is now ${counter}`);
    }
    
}

document.querySelector('button').onclick = count;
