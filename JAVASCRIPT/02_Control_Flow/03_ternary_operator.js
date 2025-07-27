//This is a compact, one-line shortcut for a simple if/else statement. 
//Syntax: condition ? valueIfTrue : valueIfFalse; 

const userAge = 21; 
let canDrink; 
if (userAge >= 21) {
    canDrink = true; 
    console.log(canDrink);
} else {
    canDrink = false;
    console.log(canDrink);  
}

const canDrinkTernary = userAge >= 21 ? true : false; 
console.log(canDrinkTernary); 
// //A more practical example: 
// const theme = isDarkMode ? 'dark' : 'light';
// console.log(`Applying ${theme} theme.`) 