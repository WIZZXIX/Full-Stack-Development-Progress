//For Loop: 
//Use it when you know how many times you want to loop to run. 
//Syntax: for (initializer; condition; incrementer)

const productList = document.querySelector('#proudct-list'); 
const products = ["Laptop", "Mouse", "Keyboard", "Monitor"]; 

for (let i = 0; i < products.length; i++){
    const product = products[i];
    const listItem = document.createElement('li'); 
    listItem.textContent = product;
    productList.appendChild(listItem);
}
