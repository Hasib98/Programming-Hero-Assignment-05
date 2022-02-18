var  remainbalance = 0;
document.getElementById("calculate-button").addEventListener("click", function () {


    const inputIncome = document.getElementById("income-input");
    const inputIncomeText = parseFloat(inputIncome.value);
    if (inputIncome.value > 0) {

        inputIncome.value = "";
    }

    else {
        alert(" Please Enter a valid number");
    }


    const inputFood = document.getElementById("food-input");
    const inputFoodText = parseFloat(inputFood.value);
    if (inputFood.value > 0) {

        inputFood.value = "";
    }
    else {
        inputFood.value = "";
    }





    const inputRent = document.getElementById("rent-input");
    const inputRentText = parseFloat(inputRent.value);
    if (inputRent.value > 0) {

        inputRent.value = "";
    }
    else {
        inputRent.value = "";
    }





    const inputCloth = document.getElementById("cloth-input");
    const inputClothText = parseFloat(inputCloth.value);
    if (inputCloth.value > 0) {

        inputCloth.value = "";
    }
    else {
        inputCloth.value = "";
    }





    const totalExpns = document.getElementById("total-expense");
    const totalExpnsText = parseFloat(totalExpns.innerText);
    const grandtotalExpnss = totalExpnsText + inputFoodText + inputRentText + inputClothText;
    totalExpns.innerText = grandtotalExpnss;

    const remainBal = document.getElementById("remaining-balance");
    const remainBalText = parseFloat(remainBal.innerText);
    const remainBalAll = remainBalText + inputFoodText + inputRentText + inputClothText;
    const remfinalBal = inputIncomeText - remainBalAll;
    remainbalance = remfinalBal;
    if (inputIncomeText < remainBalAll) {
        alert("you do not have enough money");
    }
    else {
        remainBal.innerText = remfinalBal;
    }


});

function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    inputField.value = '';
    return amountValue;
}




document.getElementById("save-button").addEventListener("click", function () {



    const saveInput = document.getElementById("save-input");
    const saveInputText = parseFloat(saveInput.value);
    saveInput.value = "";
    const balance = saveInputText/100  * remainbalance;
    const savingAmount = document.getElementById("saving-total");
    savingAmount.innerText = balance;   

    const remainingBalance = document.getElementById("balance-total");
    const remainBalTotal = remainbalance - balance;
    remainingBalance.innerText = remainBalTotal;


})