document.getElementById("deposit-btn").addEventListener("click", function () {
    // console.log("deposit input field clicked")
    const depositInput = document.getElementById("deposit-input");
    const NewDepositAmountText = depositInput.value;
    const NewDepositAmount = parseFloat(NewDepositAmountText);
    // console.log(depositAmount);


    // Update DepositTotal 
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositAmountText = depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const currentDepositAmount = previousDepositAmount + NewDepositAmount;
    depositTotal.innerText = currentDepositAmount;

    // Update Balance Total 
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + currentDepositAmount;
    balanceTotal.innerText = newBalanceTotal;





    //Clear DepositInput Field 
    depositInput.value = " ";


});

// Handle Withdraw event-handler 
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);



    // Set withdrawTotal 
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithDrawTotal = previousWithdrawTotal + newWithdrawAmount;
    console.log(newWithDrawTotal);
    withdrawTotal.innerText = newWithDrawTotal;


    // Update Balance 
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // Clear withdrawInput Field 

    withdrawInput.value = "";
})