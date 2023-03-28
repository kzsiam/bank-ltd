// step-1: add click event handler with the submit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: get the deposit amount from the deposit input field
    //always remember to use .value to get text from input field
    const userDeposit = document.getElementById('user-deposit')
     const userDepString = userDeposit.value;
     const userDep = parseFloat(userDepString)
    //  step-3
     const depositAmmount = document.getElementById('dt-ammount');
     const previousDepositString = depositAmmount.innerText;
     const previousDeposit = parseFloat(previousDepositString)

     if(isNaN(previousDeposit)){
        alert('please provide a valid number')
        return;
    }
    

     //step-4
     const currentDeposit = previousDeposit + userDep;
     depositAmmount.innerText = currentDeposit;
     userDeposit.value= ''

     //step-5
     const currentBalanceString = document.getElementById('b-ammount');
     const previousBalanceString = currentBalanceString.innerText;
     const currentBalance = parseFloat(previousBalanceString)

     const totalBalance = currentBalance + currentDeposit;

     currentBalanceString.innerText = totalBalance;

     

})