
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);


    // reset deposit input Field
    inputField.value = "";
    return inputAmount;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const amountTotalText = totalElement.innerText;
    const previousTotal = parseFloat(amountTotalText);
    // console.log(depositAmountTex);
    totalElement.innerText = previousTotal + amount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceTotalText);
    return previousBalanceTotalAmount;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotalAmount + depositAmount;
    // console.log(depositAmountTex);
    const previousBalanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotalAmount + depositAmount;
    } else {
        balanceTotal.innerText = previousBalanceTotalAmount - depositAmount;
    }
}

document.getElementById("deposit-btn").addEventListener("click", function () {


    const depositAmount = getInputValue("deposit-input");
    // console.log("Deposit Click");

    /*  const depositInput = document.getElementById("deposit-input");
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText); */
    // console.log(depositAmount);

    // get current deposit Amount 
    /*
     const depositTotal = document.getElementById("deposit-total");
    const depositAmountTotalTex = depositTotal.innerText;
    const previousDepositAmount = parseFloat(depositAmountTotalTex);
    // console.log(depositAmountTex);
    depositTotal.innerText = previousDepositAmount + depositAmount; 
    
    */
    if (depositAmount > 0) {
        updateTotalField("deposit-total", depositAmount)


        // Update Balance 

        /* 
        const balanceTotal = document.getElementById("balance-total");
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotalAmount = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotalAmount + depositAmount; */

        // updateTotalField(depositAmount)
        updateBalance(depositAmount, true)
    }




})

// Withdraw handle of eventHandler 

document.getElementById("withdraw-btn").addEventListener("click", function () {
    // console.log("Withdraw Clicked")

    // get withdraw Input 
    /* const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText)
    // console.log(withdrawAmountText); */
    const withdrawAmount = getInputValue("withdraw-input");


    // get withdraw Total 
    /* 
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    
    */
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField("withdraw-total", withdrawAmount);

        // Update Withdraw Balance 

        /* 
        const withdrawBalance = document.getElementById("balance-total");
        const withdrawBalanceTotalText = withdrawBalance.innerText;
        const previousWithdrawBalance = parseFloat(withdrawBalanceTotalText);
        withdrawBalance.innerText = previousWithdrawBalance - withdrawAmount; */

        updateBalance(withdrawAmount, false);
    }

    if (withdrawAmount > currentBalance) {
        alert("Aita taka ki tor baper taka ...besi taka uthai tesos ken????")
    }



    // // reset withdraw Field 
    // withdrawInput.value = " ";
})