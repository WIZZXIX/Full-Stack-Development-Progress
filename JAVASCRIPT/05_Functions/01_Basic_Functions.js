//Function Declaration
function myname (name) {
    const message = `Hello, my name is ${name}`;
    return message; 
}

const Myname = myname("Suchit"); 
console.log(Myname); 

//This works because the function declaration is hoisted. 
const addition = add (5, 6); 
console.log(addition); 

function add(a, b) {
    const result = a + b;
    return result;
}

//Function declared as a variable
const multiply = function (a, b) {
    return a * b;
}; // Note the semicolon here, as it's part of a variable assignment.

const product = multiply(5, 6);
console.log(product); 