//While Loop:
//Use a while loop when you don't know how many times you need to repeat, but you know the condition that should stop the loop. 

let isGameRunning = true; 
let playerHealth = 100; 

while (playerHealth > 0) {
    console.log(`Player health is ${playerHealth}. Attacking monster!`); 
    const damageTaken = 20; 
    playerHealth -= damageTaken;
}
console.log("Game Over! Player has been defeated."); 