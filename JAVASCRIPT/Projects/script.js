const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const numberOfPeopleInput = document.getElementById("number-of-people");
const tipPercentageValue = document.getElementById("tip-percentage-value");
const tipAmountValue = document.getElementById("tip-amount");
const totalPerPersonValue = document.getElementById("total-per-person");

function calculateTip() {
    const billAmount = parseFloat(billAmountInput.value); 
    const tipPercentage = parseInt(tipPercentageInput.value); 
    const numberOfPeople = parseInt(numberOfPeopleInput.value); 

    if (isNaN(billAmount) || billAmount < 0) {
        tipAmountValue.textContent = '$0.00'; 
        totalPerPersonValue.textContent = '$0.00'; 
        return; 
    }
    if (isNaN(numberOfPeople) || numberOfPeople < 1){
        return; 
    }

    const totalTip = billAmount * (tipAmountValue / 100); 
    const totalBill = billAmount + totalTip; 
    const totalPerPerson = totalBill / numberOfPeople; 

    tipAmountValue.textContent = `$${totalTip.toFixed(2)}`; 
    totalPerPersonValue.textContent = `$${totalPerPerson.toFixed(2)}`; 
}

function updateTipDisplay() {
    tipPercentageValue.textContent = `${tipPercentageInput.value}%`
}

billAmountInput.addEventListener('input', calculateTip);
tipPercentageInput.addEventListener('input', calculateTip);
numberOfPeopleInput.addEventListener('input', calculateTip);
tipPercentageInput.addEventListener('input', updateTipDisplay);

calculateTip();
updateTipDisplay();