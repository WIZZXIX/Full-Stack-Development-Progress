//For Loop: 
//Use it when you know how many times you want to loop to run. 
//Syntax: for (initializer; condition; incrementer)

for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

let num = 5; 
for (let i = 1; i <= 10; i++){
    console.log(num * i);
}

const subjects = ["Maths ", "Science ", "Polity ", "History "];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len; i++) {
    gfg += subjects[i];
 
}
console.log(gfg)


//for...in: this loop is used to loop through the properties of an object.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
