//Just like functions, you can pass parameters to some methods, where the parameters are placed between the parentheses following the method's name. 
//1) Array Methods: 
let str = "My name is Suchit"; 

console.log("The character at 7th position is, ", str.charAt(8)); //charAt: Returns the character at the specified index

let firstname = "Suchit"; 
let surname = "Manthen"; 

let result = firstname.concat(" ",surname); //concat: Combines the text of two strings and returns a new string. 
console.log(result); 

console.log(str.indexOf("S")); //indexOf: Returns the index within the string of the first occurrence of the specified value.

console.log(str.replace("Suchit", "Tejas")); //replace: this method replaces a specified phrase with another specified phrase.

console.log(str.search("hit")); //search: this method serches a specified value and returns the index of where it was found.

let language = "JavaScript"; 
console.log(language.substring(4, )); //substring: This method returns the characters in a string between two specified indices.

let lower = "SUCHIT Manthen"; 
console.log(lower.toLowerCase()); //toLowerCase: This method converts a string to lowercase.

let upper = "suchit MantheN"; 
console.log(upper.toUpperCase()); //toUpperCase: This method converts a string to uppercase.

let str1 = "My name is Suchit";
console.log(str1.valueOf()); //valueOf: This method returns the value of that particular variable and prints out. 

