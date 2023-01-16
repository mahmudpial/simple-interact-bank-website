/* 
1. add event handler with the withdraw button
2. get the withdraw amount

3. clear the withdraw input field

4. get previous withdraw total

5. calculate total Withdraw amount and set it to the withdraw total element

6. get previous balance

7. calculate new balance and set it to the balance total element
*/

// step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step -3

  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please Enter A Valid Number");
    return;
  }

  // step-4
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-5
  const balanceTotalElement = document.getElementById("total-balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("SORRY!! Insaficent Balance");
    return;
  }
  // step-7
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  // step-8
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
