//2) Math methods: 

let neg = -50; 
let pos = 50; 
let nothing = null; 
let str = "Suchit"; 
let sub = 2 -3; 

//Math.abs(): Returns the absolute value of a number. i.e., it returns the number without its sign.
console.log(Math.abs(neg)); 
console.log(Math.abs(pos)); 
console.log(Math.abs(nothing)); 
console.log(Math.abs(str)); 
console.log(Math.abs(sub)); 

//Math.ceil(): Returns the smallest integer that is greater than or equal to a given number.
let num1 = -5.1;
let num2 = -4.9; 
let num3 = 0.59; 
console.log(Math.ceil(num1)); //-5
console.log(Math.ceil(num2)); //-4
console.log(Math.ceil(num3)); //1

//Math.cos(): Returns the cosine of a number.
let num4 = 0.5;
console.log(Math.cos(num4)); //0.8775825618903728

//Math.exp(): Returns the value of e raised to a given number.
let num5 = 2; //e^num5
console.log(Math.exp(num5)); //7.38905609893065


//Math.floor(): Returns the largest integer that is less than or equal to a given number.
let num6 = 5.9;
let num7 = 4.9;
console.log(Math.floor(num7)); //4
console.log(Math.floor(num6)); //5

//Math.min(): Returns the smallest of zero or more numbers.
let num8 = 10;
let num9 = 20;
let num10 = 30;
console.log(Math.min(num8, num9, num10)); //10

//Math.max(): Returns the largest of zero or more numbers.
console.log(Math.max(num8, num9, num10)); //30

//Math.pow(): Returns the result of raising a number to a power.
let num11 = 2; //2^num11
console.log(Math.pow(num11, 3)); //8

//Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); //it's random. 
let random = Math.floor(Math.random() * 10) + 1; //random number between 1 to 10; 
console.log(random); //it's random.

//Math.sqrt(): Returns the square root of a number.
let num12 = 16; 
console.log(Math.sqrt(num12)); //4