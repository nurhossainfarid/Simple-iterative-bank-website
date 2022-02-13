// Deposit
document.getElementById('deposit-button').addEventListener('click', function (depositEvent) {
    // deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const depositInputConvertToFloat = parseFloat(depositValue);
    // total deposit
    const previousDeposit = document.getElementById('total-deposit');
    const totalPreviousDepositAmount = previousDeposit.innerText;
    const totalDepositConvertToFloat = parseFloat(totalPreviousDepositAmount);
    // total balance 
    const previousTotalBalance = document.getElementById('total-balance');
    const convertTotalBalance = parseFloat(previousTotalBalance.innerText);
    // current deposit value
    const currentTotalDeposit = depositInputConvertToFloat + totalDepositConvertToFloat;
    previousDeposit.innerText = currentTotalDeposit;
    depositInput.value = '';
    // current total balance
    const currentTotalAmount = depositInputConvertToFloat + convertTotalBalance;
    previousTotalBalance.innerText = currentTotalAmount;

})

// Withdraw
document.getElementById('withdraw-button').addEventListener('click', function (withdrawEvent) {
    // withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const withdrawConvertFloat = parseFloat(withdrawValue);
    // total withdraw
    const previousWithdraw = document.getElementById('total-withdraw');
    const totalPreviousWithdrawAmount = previousWithdraw.innerText;
    const totalWithdrawConvertFloat = parseFloat(totalPreviousWithdrawAmount);
    // current deposit value
    const currentTotalWithdraw = withdrawConvertFloat + totalWithdrawConvertFloat;
    previousWithdraw.innerText = currentTotalWithdraw;
    withdrawInput.value = '';
    // total balance 
    const previousTotalBalance = document.getElementById('total-balance');
    const convertTotalBalance = parseFloat(previousTotalBalance.innerText);
    // current total balance
    const currentTotalAmount = convertTotalBalance - withdrawConvertFloat;
    previousTotalBalance.innerText = currentTotalAmount;
})