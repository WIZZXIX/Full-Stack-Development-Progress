//JavaScript variables can hold different types of data 
//1) String: 
const name = "Suchit"; 
const job = "Web Developer"; 

//old way of combining strings: 
const sentence1 = "My name is " + name + " and I am a " + job + ".";

//modern way with template literals: 
const sentence2 = `My name is ${name} and I am a ${job}.`
console.log(sentence1); 
console.log(sentence2); 

//2) Number: 
const integer = 100; 
const decimal = 55.6; 
const result = integer + decimal; //155.6 
console.log(result); 

//3) Boolean: 
const isLoggedIn = true; 
const hasAdminRights = false; 

//4) null vs. undefined
//undefined: a variable has been declared, but it has no value assigned to it yet. It's the default state. 
//null: Is an assignment value. It means, the variable to have no value. 
let userCity; 
console.log(userCity); //Output: undefined

let selectedProduct = null; 
console.log(selectedProduct); 
selectedProduct = "Grocceries"; 
console.log(selectedProduct); 

//5) Object: 
//The most important data type. It's a collection of key-value pairs, used to group relatd data. 
const car = {
    brand: "Tesla",
    model: "Model S", 
    year: 2024, 
    isElectric: true,
    features: ["Autopilot", "Touchscreen", "Sentry Mode"]
}; 
console.log(car.model); //Output: "Model S"

const keyToAccess = "brand"; 
console.log(car[keyToAccess]); //Output: "Tesla"

