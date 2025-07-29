const date = new Date('2025-7-29'); 
console.log(date.getDate()); // 29
console.log(date.getMonth() + 1); //7, why + 1 because the getMonth() method is zero-based (0-11)
console.log(date.getFullYear()); // 2025
console.log(date.getTime()); // 1659009600000, number of milliseconds since 1/1/1970 @12:00 AM 
console.log(date.getSeconds()); 
console.log(date.getMinutes()); 