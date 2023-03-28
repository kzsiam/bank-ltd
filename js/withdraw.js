/*
1.add event handler with the withdraw button 
2.get the withdraw ammount from the withdraw input field
2.5.also make sure to convert the input into a number by using parseFloat
3.get previous withdraw total
4.calculate total withdraw amount
4.5.set the total withdraw amount
5.get the previous balance total
6.calculate new balance total
6.5,set the balance
7.clear the input field
*/

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
     //step-7
     withdrawField.value = ''

    
    //step-3
    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withDrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

    // if(isNaN(previousWithdrawTotal)){
    //     alert('please provide a valid number')
    //     return;
    // }




    

    //step-6
    const balanceTotalElement = document.getElementById('b-ammount')
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString)

     

    //
    if(newWithdrawAmount > previousBalanceTotal){
        alert('insufficiant balance')
        return;
    }

   
    // step-4
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    const newBlanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBlanceTotal

    //step-5
    withDrawTotalElement.innerText = currentWithdrawTotal;



   


})
