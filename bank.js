
function getInputByIdName(idname){
    const inputField = document.getElementById(idname);
    if(inputField.value == ''){
        return 0;
    }

    else{
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputAmount;
    }
}

function setMoneyAmount(balanceId, transactionId, transactionAmount){
    if(Math.abs(transactionAmount) < 0){
        alert('Please Enter a valid Amount');
    }

    else{
        // Balance Info
        const balance = document.getElementById(balanceId);
        const balanceAmount = parseFloat(balance.innerText);
        
        // Deposit Info
        const transactionDisplay = document.getElementById(transactionId);
        const previousTransactionAmount = parseFloat(transactionDisplay.innerText);

        // Set Amounts
        transactionDisplay.innerText = previousTransactionAmount + Math.abs(transactionAmount);
        balance.innerText = balanceAmount + transactionAmount; 
    }
}


document.getElementById('depositBtn').addEventListener('click', function(){
    const depositMoney = getInputByIdName('depoAmount');
    setMoneyAmount('balanceCount', 'depoCount', depositMoney);
});


document.getElementById('withdrawBtn').addEventListener('click', function(){
    const withdrawMoney = getInputByIdName('withdrawAmount');
    setMoneyAmount('balanceCount', 'withdrawCount', - withdrawMoney)
});

