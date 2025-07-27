//An if statement executes code if its condition is true. 
//You can have multiple else if statement to check for other conditions.
//An else statement is the final fallback that runs if no other condition was met. 

//1) User greeting
const hourOfDay = new Date().getHours(); 

let grettings; 
if (hourOfDay < 12) {
    grettings = "Good morning";
} else if (hourOfDay < 18) {
    grettings = "Good afternoon";
} else {
    grettings = "Good evening";
}
console.log(grettings);

//2) Input Validaiton 
let username = "Suchit"; 
if (username.length === 0) {
    console.error("Error: Username cannot be empty."); 
}
else if (username.length < 4) {
    console.error("Error: Username must be at least 4 characters long.");
}
else {
    console.log(`Welcome, ${username}!`);
}

