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


})