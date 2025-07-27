//A switch statement is a good alternative to a long if/else if chain when you are 
//comparing a single value against multiple possible matches. 

const userRole = "admin"; 
switch (userRole) {
    case "admin": 
        console.log("You have full access."); 
        break; 
    case "editor": 
        console.log("You can create and edit content."); 
        break; 
    case "viewer": 
        console.log("You can only view content."); 
        break; 
    default: //The fallback, similar to 'else'
        console.log("Unknown role. Access denied."); 

}
