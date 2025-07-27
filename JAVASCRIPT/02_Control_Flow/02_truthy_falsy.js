//Falsy Values: 
/* 
    false 
    0 (the number zero)
    "" (an empty string)
    null 
    undefined 
    NaN (Not a Number)
*/ 

//Truthy Values: 
/* 
    everything else is TRUTHY. 
    non-empty strings("hello"), 
    numbers other than zero, 
    arrays, 
    and objects. 
    Even empty arrays and objects are truthy.
*/ 

let userInput = ""; //Falsy
let userObject = {name : "Suchit"}; 
let loggedInUser = null; //Falsy

if (userInput) {
    console.log("User typed something."); //This won't run
}

if (userObject) {
    console.log(`Welcome, ${userObject.name}`); //This will run
}

if (!loggedInUser) {
    console.log("Please log in to continue."); //This will run
}
