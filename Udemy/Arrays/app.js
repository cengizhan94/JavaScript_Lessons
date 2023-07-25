let value;
const numbers = [43,46,33,21,23,30,5];
const langs = ["Python", "Java", "C++", "JavaScript"]
const a = ["Hello", 22, null, undefined, 3.14];
//uzunluk
value = numbers.length;
//index
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length -1];
//index değeri değiştirme
numbers[2] = 1000
value = numbers;
//index Of
value = numbers.indexOf(1000);
//Push
numbers.push(2000)
value = numbers;
//unshift
numbers.unshift(3000);
value = numbers
//pop
numbers.pop()
value = numbers;
//shift
numbers.shift()
value = numbers

//splice
numbers.splice(0,3)

//reverse
numbers.reverse();
value= numbers.sort();
value= numbers.sort(function(x,y){
    return x - y
});

value = numbers.sort(function(x,y) {
    return y-x;
});

console.log(value)