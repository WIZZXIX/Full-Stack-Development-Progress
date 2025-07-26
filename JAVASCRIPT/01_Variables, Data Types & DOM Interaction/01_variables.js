//Variables are useful for the storing values. 
//Three keywords are: 1)const 2)let 3)var

//1) const (constant)
//const variable connot be reassigned
const birthYear = 1995; 
console.log(birthYear); //Output: 1995

//for the const object variable we can still change its contents
const user = {
    name: "Suchit", 
    age: 21
}; 
user.age = 22; 
user.city = "Mumbai";
user.name = "Rohit";
console.log(user); 

//2) let 
//let variable can be reassigned. It is also block-scoped, which means only exists within the curly braces {...} it was defined in (like an if statement or a for loop)
let currentScore = 0; 
console.log(currentScore); //Output: 0

currentScore = 100; 
console.log(currentScore); //Output: 100

if(true) {
    let message = "It is a secret"; 
    console.log(message); //Output: "It is a secret"
}

//3) var (the old way)
//before 2015, var was the only way to declare variables, you should avoid using it in modern JavaScript. 
//var is a function-scoped
if (true) {
    var anotherMessage = "It is also a secret"; 
}
console.log(anotherMessage); //Output: "It is also a secret"

// console.log(message); //This would throw a error
console.log(myVar); //Output: undefined (not an error!)
var myVar = "Hello";
console.log(myVar);